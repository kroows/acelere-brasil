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
    // Verifica se temos dados no corpo da requisição
    if (!req.body) {
      throw new Error('Nenhum dado recebido no corpo da requisição');
    }

    console.log('Dados recebidos no proxy:', req.body);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        postData: {
          contents: JSON.stringify(req.body)
        }
      })
    });

    // Lê a resposta como texto primeiro
    const responseText = await response.text();
    console.log('Resposta do Google Apps Script:', responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Erro ao fazer parse da resposta:', parseError);
      return res.status(500).json({
        status: 'error',
        message: 'Erro ao processar resposta do servidor',
        rawResponse: responseText
      });
    }

    return res.status(200).json(responseData);

  } catch (error) {
    console.error('Erro no proxy:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Erro desconhecido',
      stack: error.stack
    });
  }
};