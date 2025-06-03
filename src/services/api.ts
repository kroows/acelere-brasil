import axios from 'axios';

const isDevelopment = import.meta.env.DEV;
const baseURL = isDevelopment ? '' : '';

const api = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// Interceptor para logging
api.interceptors.request.use(request => {
  console.log('Request:', request);
  return request;
});

api.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export const submitHeroForm = async (data: {
  name: string;
  phone: string;
  email: string;
  agreed: boolean;
}) => {
  console.log('Iniciando submissão do formulário hero:', data);
  
  // Construindo o objeto de dados
  const formData = {
    _wpcf7: '8335f54',
    _wpcf7_version: '5.8.4',
    _wpcf7_locale: 'pt_BR',
    _wpcf7_unit_tag: `wpcf7-f8335f54-p2-o${Math.floor(Math.random() * 1000)}`,
    _wpcf7_container_post: '2',
    action: 'wpcf7_submit',
    'your-name': data.name,
    whatsapp: data.phone,
    'your-email': data.email,
    'acceptance-119': data.agreed ? '1' : ''
  };

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/api/proxy';
  
  try {
    console.log('Enviando requisição para:', endpoint);
    console.log('FormData:', formData);
    
    const response = await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });

    console.log('Resposta recebida:', response);
    return response;
  } catch (error) {
    console.error('Erro detalhado do formulário hero:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
      formData
    });
    throw error;
  }
};

export const submitEbookForm = async (data: {
  name: string;
  phone: string;
  email: string;
  niche: string;
}) => {
  console.log('Iniciando submissão do formulário de e-book:', data);
  
  // Construindo o objeto de dados
  const formData = {
    _wpcf7: '567a523',
    _wpcf7_version: '5.8.4',
    _wpcf7_locale: 'pt_BR',
    _wpcf7_unit_tag: `wpcf7-f567a523-p2-o${Math.floor(Math.random() * 1000)}`,
    _wpcf7_container_post: '2',
    action: 'wpcf7_submit',
    'your-name': data.name,
    whatsapp: data.phone,
    'your-email': data.email,
    nicho: data.niche
  };

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/api/proxy';
  
  try {
    console.log('Enviando requisição para:', endpoint);
    console.log('FormData:', formData);
    
    const response = await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });

    console.log('Resposta recebida:', response);
    return response;
  } catch (error) {
    console.error('Erro detalhado do formulário de e-book:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
      formData
    });
    throw error;
  }
}; 