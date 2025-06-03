export default async function handler(req, res) {
  // IDs dos formulários
  const FORM_IDS = {
    hero: '8335f54',
    ebook: '567a523'
  };

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  try {
    const { formType, ...formData } = req.body;
    const formId = FORM_IDS[formType];

    if (!formId) {
      throw new Error('Tipo de formulário inválido');
    }

    const url = `https://acelerebrasil.com.br/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

    console.log('Enviando dados para o WordPress:', {
      url,
      formType,
      formId,
      data: formData
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    console.log('Status da resposta:', response.status);
    const data = await response.json();
    console.log('Dados da resposta:', data);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Erro na requisição:', error);
    res.status(500).json({ 
      error: 'Erro ao processar a requisição', 
      details: error.message,
      stack: error.stack 
    });
  }
} 