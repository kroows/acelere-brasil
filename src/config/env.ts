export const config = {
  isDevelopment: import.meta.env.DEV,
  wordpressUrl: import.meta.env.VITE_WORDPRESS_URL || 'https://seusite.com.br',
  forms: {
    hero: {
      id: import.meta.env.VITE_HERO_FORM_ID || '8335f54',
      fields: {
        name: 'your-name',
        phone: 'whatsapp',
        email: 'your-email',
        acceptance: 'acceptance-119'
      }
    },
    ebook: {
      id: import.meta.env.VITE_EBOOK_FORM_ID || '567a523',
      fields: {
        name: 'your-name',
        phone: 'whatsapp',
        email: 'your-email',
        niche: 'nicho'
      }
    }
  }
}; 