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
    // Verificar o tipo de conteúdo
    const contentType = request.headers['content-type'] || '';
    console.log('[Proxy] Content-Type:', contentType);
    console.log('[Proxy] Request Headers:', request.headers);

    // Obter o corpo da requisição como texto
    const body = await request.text();
    console.log('[Proxy] Raw body:', body);

    // Enviar diretamente para o WordPress
    const res = await fetch('https://acelerebrasil.com.br/wp-admin/admin-ajax.php', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Origin': 'https://acelerebrasil.com.br',
        'Referer': 'https://acelerebrasil.com.br',
        'User-Agent': 'Mozilla/5.0 (Vercel Serverless Function)',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    console.log('[Proxy] WordPress response status:', res.status);
    const data = await res.text();
    console.log('[Proxy] WordPress response:', data);

    try {
      const jsonData = JSON.parse(data);
      return response.status(res.status).json(jsonData);
    } catch (e) {
      return response.status(res.status).json({
        status: res.ok ? 'mail_sent' : 'error',
        message: data,
        response: res.status
      });
    }
  } catch (error) {
    console.error('[Proxy] Fatal error:', error);
    return response.status(500).json({ 
      status: 'error',
      message: 'Error forwarding request',
      details: error.message
    });
  }
} 