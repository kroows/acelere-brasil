const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Configurar CORS para o domínio específico
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://acelere-brasil.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Retornar imediatamente para requisições OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const url = 'https://script.google.com/macros/s/AKfycbznMfyYNXb-7VqLY5i71PkkjLQ4kENZDy748c26ey92PKtzn0CIumgg-HuyRKSAHKpi9w/exec';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ 
      status: 'error', 
      message: `Erro ao enviar formulário: ${error.message || 'Desconhecido'}` 
    });
  }
};