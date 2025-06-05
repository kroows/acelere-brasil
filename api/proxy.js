const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const url = 'https://script.google.com/macros/s/AKfycbznMfyYNXb-7VqLY5i71PkkjLQ4kENZDy748c26ey92PKtzn0CIumgg-HuyRKSAHKpi9w/exec';

  try {
    console.log('Enviando requisição para:', url);
    console.log('Dados enviados:', req.body);

    const response = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(req.body),
      redirect: 'follow'
    });

    console.log('Status da resposta:', response.status);
    console.log('Headers da resposta:', response.headers);

    // Tenta ler o corpo da resposta como texto primeiro
    const responseText = await response.text();
    console.log('Resposta como texto:', responseText);

    let responseData;
    try {
      // Tenta converter o texto em JSON
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Erro ao fazer parse do JSON:', parseError);
      // Se não for JSON válido, retorna erro com o texto original
      return res.status(500).json({
        status: 'error',
        message: `Resposta inválida do servidor: ${responseText.substring(0, 100)}...`
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return res.status(200).json(responseData);

  } catch (error) {
    console.error('Erro completo:', error);
    return res.status(500).json({
      status: 'error',
      message: `Erro ao processar requisição: ${error.message}`,
      details: error.stack
    });
  }
};