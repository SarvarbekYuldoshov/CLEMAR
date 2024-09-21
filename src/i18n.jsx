import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../src/public/uzbek/uzbek.json';
import ruTranslation from '../src/public/russian/russian.json';
import enTranslation from '../src/public/english/english.json';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'uz',
    lng: i18n.language, 
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
  });

export default i18n;
