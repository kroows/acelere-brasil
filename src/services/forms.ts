import { config } from '@/config/env';
import { WordPressService } from './wordpress';

interface HeroFormData {
  name: string;
  phone: string;
  email: string;
  agreed: boolean;
}

interface EbookFormData {
  name: string;
  phone: string;
  email: string;
  niche: string;
}

export class FormService {
  static async submitHeroForm(data: HeroFormData) {
    const { hero } = config.forms;
    
    const formData = {
      [hero.fields.name]: data.name,
      [hero.fields.phone]: data.phone,
      [hero.fields.email]: data.email,
      [hero.fields.acceptance]: data.agreed ? '1' : ''
    };

    return WordPressService.submitForm(hero.id, formData);
  }

  static async submitEbookForm(data: EbookFormData) {
    const { ebook } = config.forms;
    
    const formData = {
      [ebook.fields.name]: data.name,
      [ebook.fields.phone]: data.phone,
      [ebook.fields.email]: data.email,
      [ebook.fields.niche]: data.niche
    };

    return WordPressService.submitForm(ebook.id, formData);
  }
} 