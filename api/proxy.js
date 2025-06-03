export default async function handler(request, response) {
  // Configurar CORS
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Retornar para requisições OPTIONS
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  try {
    let formDataObject = {};

    // Verificar o tipo de conteúdo
    const contentType = request.headers.get('content-type') || '';
    console.log('[Proxy] Content-Type:', contentType);
    console.log('[Proxy] Request Headers:', request.headers);

    if (contentType.includes('application/json')) {
      formDataObject = await request.json();
      console.log('[Proxy] JSON Data:', formDataObject);
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.text();
      const params = new URLSearchParams(formData);
      params.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log('[Proxy] Form URL Encoded Data:', formDataObject);
    } else if (contentType.includes('multipart/form-data')) {
      try {
        const formData = await request.formData();
        const entries = Array.from(formData.entries());
        entries.forEach(([key, value]) => {
          formDataObject[key] = value;
        });
        console.log('[Proxy] Multipart Form Data:', formDataObject);
      } catch (error) {
        console.error('[Proxy] Error parsing form data:', error);
        return response.status(400).json({
          status: 'error',
          message: 'Error parsing form data',
          details: error.message
        });
      }
    } else {
      console.error('[Proxy] Unsupported content type:', contentType);
      return response.status(400).json({
        status: 'error',
        message: 'Unsupported content type',
        contentType
      });
    }

    // Verificar se temos os campos necessários
    const requiredFields = ['_wpcf7', '_wpcf7_version', '_wpcf7_locale', '_wpcf7_unit_tag'];
    const missingFields = requiredFields.filter(field => !formDataObject[field]);
    
    if (missingFields.length > 0) {
      console.error('[Proxy] Missing required fields:', missingFields);
      return response.status(400).json({
        status: 'error',
        message: 'Missing required fields',
        missingFields
      });
    }

    // Preparar os dados para envio
    const formBody = new URLSearchParams();
    Object.entries(formDataObject).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    console.log('[Proxy] Sending to WordPress:', Object.fromEntries(formBody));

    const res = await fetch('https://acelerebrasil.com.br/wp-admin/admin-ajax.php', {
      method: 'POST',
      body: formBody.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Origin': 'https://acelerebrasil.com.br',
        'Referer': 'https://acelerebrasil.com.br',
        'User-Agent': 'Mozilla/5.0 (Vercel Serverless Function)'
      }
    });

    console.log('[Proxy] WordPress response status:', res.status);
    const data = await res.text();
    console.log('[Proxy] WordPress response:', data);

    let jsonData;
    try {
      jsonData = JSON.parse(data);
      console.log('[Proxy] Parsed JSON response:', jsonData);
    } catch (e) {
      console.error('[Proxy] Error parsing JSON response:', e);
      // Se não for JSON válido, criar um objeto com a resposta
      jsonData = { 
        status: res.ok ? 'mail_sent' : 'error',
        message: data,
        response: res.status
      };
    }
    
    // Definir o status da resposta com base no status do WordPress
    const responseStatus = jsonData.status === 'mail_sent' ? 200 : res.status;
    return response.status(responseStatus).json(jsonData);
  } catch (error) {
    console.error('[Proxy] Fatal error:', error);
    return response.status(500).json({ 
      status: 'error',
      message: 'Error forwarding request',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
} 