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

    if (contentType.includes('application/json')) {
      formDataObject = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.text();
      const params = new URLSearchParams(formData);
      params.forEach((value, key) => {
        formDataObject[key] = value;
      });
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
    }

    // Adicionar action para o WordPress se não existir
    if (!formDataObject.action) {
      formDataObject.action = 'contact_form_7';
    }

    const res = await fetch('https://acelerebrasil.com.br/wp-admin/admin-ajax.php', {
      method: 'POST',
      body: new URLSearchParams(formDataObject).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Origin': 'https://acelerebrasil.com.br',
        'Referer': 'https://acelerebrasil.com.br',
        'User-Agent': 'Mozilla/5.0 (Vercel Serverless Function)'
      }
    });

    const data = await res.text();
    let jsonData;
    
    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      // Se não for JSON válido, criar um objeto com a resposta
      jsonData = { 
        status: res.ok ? 'mail_sent' : 'error',
        message: data,
        response: res.status
      };
    }
    
    return response.status(res.status).json(jsonData);
  } catch (error) {
    console.error('Proxy error:', error);
    return response.status(500).json({ 
      status: 'error',
      message: 'Error forwarding request',
      details: error.message 
    });
  }
} 