import axios from 'axios';

const isDevelopment = import.meta.env.DEV;
const baseURL = isDevelopment ? '' : '/api';

const api = axios.create({
  baseURL
});

export const submitHeroForm = async (data: {
  name: string;
  phone: string;
  email: string;
  agreed: boolean;
}) => {
  const formData = new FormData();
  formData.append('Name', data.name);
  formData.append('Whatsapp', data.phone);
  formData.append('Email', data.email);
  formData.append('Acceptance 119', data.agreed ? 'Sim' : 'Não');
  formData.append('_wpcf7', '108');
  formData.append('_wpcf7_version', '5.8.4');
  formData.append('_wpcf7_locale', 'pt_BR');
  formData.append('_wpcf7_unit_tag', 'wpcf7-f108');
  formData.append('action', 'wpcf7_submit');

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/proxy';
  return api.post(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const submitEbookForm = async (data: {
  name: string;
  phone: string;
  email: string;
  niche: string;
}) => {
  const formData = new FormData();
  formData.append('Name', data.name);
  formData.append('Whatsapp', data.phone);
  formData.append('Email', data.email);
  formData.append('Nicho', data.niche);
  formData.append('_wpcf7', '115');
  formData.append('_wpcf7_version', '5.8.4');
  formData.append('_wpcf7_locale', 'pt_BR');
  formData.append('_wpcf7_unit_tag', 'wpcf7-f115');
  formData.append('action', 'wpcf7_submit');

  const endpoint = isDevelopment ? '/wp-admin/admin-ajax.php' : '/proxy';
  return api.post(endpoint, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}; 