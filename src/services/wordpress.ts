import axios from 'axios';
import { config } from '@/config/env';

const api = axios.create({
  baseURL: config.isDevelopment ? '' : '',
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

interface FormData {
  [key: string]: string | number | boolean;
}

export class WordPressService {
  private static createFormData(formId: string, data: FormData): FormData {
    return {
      _wpcf7: formId,
      _wpcf7_version: '5.8.4',
      _wpcf7_locale: 'pt_BR',
      _wpcf7_unit_tag: `wpcf7-f${formId}-p2-o${Math.floor(Math.random() * 1000)}`,
      _wpcf7_container_post: '2',
      action: 'wpcf7_submit',
      ...data
    };
  }

  static async submitForm(formId: string, data: FormData): Promise<any> {
    const endpoint = config.isDevelopment ? '/wp-admin/admin-ajax.php' : '/api/proxy';
    const formData = this.createFormData(formId, data);

    try {
      const response = await api.post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao enviar formulário:', {
        formId,
        data,
        error
      });
      throw error;
    }
  }
} 