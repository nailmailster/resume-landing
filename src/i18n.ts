import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru } from './locales/ru';
import { en } from './locales/en';
import { zh } from './locales/zh';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      zh: { translation: zh }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    load: 'languageOnly',
    detection: {
      order: ['navigator'],
      caches: []
    }
  });

export default i18n; 