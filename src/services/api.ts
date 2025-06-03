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
  
  const formData = new URLSearchParams();
  formData.append('_wpcf7', '108');
  formData.append('_wpcf7_version', '5.8.4');
  formData.append('_wpcf7_locale', 'pt_BR');
  formData.append('_wpcf7_unit_tag', `wpcf7-f108-p2-o${Math.floor(Math.random() * 1000)}`);
  formData.append('_wpcf7_container_post', '2');
  formData.append('action', 'wpcf7_submit');
  formData.append('your-name', data.name);
  formData.append('your-whatsapp', data.phone);
  formData.append('your-email', data.email);
  formData.append('acceptance-119', data.agreed ? '1' : '');

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/api/proxy';
  
  try {
    console.log('Enviando requisição para:', endpoint);
    console.log('FormData:', Object.fromEntries(formData));
    
    const response = await api.post(endpoint, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log('Resposta recebida:', response);
    return response;
  } catch (error) {
    console.error('Erro detalhado do formulário hero:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
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
  
  const formData = new URLSearchParams();
  formData.append('_wpcf7', '115');
  formData.append('_wpcf7_version', '5.8.4');
  formData.append('_wpcf7_locale', 'pt_BR');
  formData.append('_wpcf7_unit_tag', `wpcf7-f115-p2-o${Math.floor(Math.random() * 1000)}`);
  formData.append('_wpcf7_container_post', '2');
  formData.append('action', 'wpcf7_submit');
  formData.append('your-name', data.name);
  formData.append('your-whatsapp', data.phone);
  formData.append('your-email', data.email);
  formData.append('your-niche', data.niche);

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/proxy';
  
  try {
    console.log('Enviando requisição para:', endpoint);
    console.log('FormData:', Object.fromEntries(formData));
    
    const response = await api.post(endpoint, formData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log('Resposta recebida:', response);
    return response;
  } catch (error) {
    console.error('Erro detalhado do formulário de e-book:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });
    throw error;
  }
}; 