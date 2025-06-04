const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Responder imediatamente às requisições OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { formType, ...formData } = req.body;
  const formId = formType === 'hero' ? '8335f54' : '567a523';
  const url = `https://acelerebrasil.com.br/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

  try {
    // Preparar os dados do formulário no formato esperado pelo Contact Form 7
    const cfData = {
      'your-name': formData.name,
      'your-email': formData.email,
      'whatsapp': formData.phone,
      ...(formType === 'hero' 
        ? { 'acceptance-119': formData.agreed ? '1' : '' }
        : { 'nicho': formData.niche })
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cfData),
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ message: 'Erro ao enviar formulário' });
  }
};