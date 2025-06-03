export default async function handler(request, response) {
  const formData = await request.formData();
  
  try {
    const res = await fetch('https://acelerebrasil.com.br/wp-admin/admin-ajax.php', {
      method: 'POST',
      body: formData,
      headers: {
        'Origin': 'https://acelerebrasil.com.br'
      }
    });

    const data = await res.json();
    
    return response.status(res.status).json(data);
  } catch (error) {
    return response.status(500).json({ 
      error: 'Error forwarding request',
      details: error.message 
    });
  }
} 