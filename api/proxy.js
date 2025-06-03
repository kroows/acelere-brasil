export default async function handler(request, response) {
  // Configurar CORS
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept'
  );

  // Retornar para requisições OPTIONS
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Apenas aceitar POST
  if (request.method !== 'POST') {
    return response.status(405).json({ 
      status: 'error',
      message: 'Method not allowed'
    });
  }

  try {
    const WORDPRESS_URL = process.env.WORDPRESS_URL;

    if (!WORDPRESS_URL) {
      throw new Error('WORDPRESS_URL environment variable is not set');
    }

    // Enviar para o WordPress
    const res = await fetch(`${WORDPRESS_URL}/wp-admin/admin-ajax.php`, {
      method: 'POST',
      body: request.body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });

    const data = await res.text();

    try {
      // Tentar parsear como JSON
      const jsonData = JSON.parse(data);
      return response.status(res.status).json(jsonData);
    } catch {
      // Se não for JSON, retornar resposta formatada
      return response.status(res.status).json({
        status: res.ok ? 'mail_sent' : 'error',
        message: data
      });
    }
  } catch (error) {
    return response.status(500).json({ 
      status: 'error',
      message: error.message
    });
  }
} 