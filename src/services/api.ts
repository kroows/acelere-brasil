import axios from 'axios';

const isDevelopment = import.meta.env.DEV;
const baseURL = isDevelopment ? '' : '/api';

const api = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// Interceptor para logging
api.interceptors.request.use(request => {
  console.log('Request:', {
    url: request.url,
    method: request.method,
    data: request.data,
    headers: request.headers
  });
  return request;
});

api.interceptors.response.use(
  response => {
    console.log('Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  error => {
    console.error('Response Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    return Promise.reject(error);
  }
);

export const submitHeroForm = async (data: {
  name: string;
  phone: string;
  email: string;
  agreed: boolean;
}) => {
  const formData = new FormData();
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

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/proxy';
  
  try {
    const response = await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    console.error('Hero Form Error:', error);
    throw error;
  }
};

export const submitEbookForm = async (data: {
  name: string;
  phone: string;
  email: string;
  niche: string;
}) => {
  const formData = new FormData();
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
    const response = await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    console.error('Ebook Form Error:', error);
    throw error;
  }
}; 