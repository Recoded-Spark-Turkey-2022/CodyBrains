import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
import translationEN from '../locales/en/translation.json';
import translationAR from '../locales/ar/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationTR from '../locales/tr/translation.json';

import 'flag-icon-css/css/flag-icons.min.css';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  fr: {
    translation: translationFR,
  },
  tr: {
    translation: translationTR,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    supportedLngs: ['en', 'ar', 'fr', 'tr'],
    debug: false,

    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18next;
