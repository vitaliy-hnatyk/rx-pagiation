import { createInstance } from 'i18next';

const i18n = createInstance({
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        'page_navigation': 'Page navigation',
        'previous':'Previous',
        'next': 'next'
      },
    }
  },
});

i18n.init();

export default i18n;