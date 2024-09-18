import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../public/uzbek/uzbek.json'; // To'g'ri fayl
import ruTranslation from '../public/russian/russian.json';
import enTranslation from '../public/english/english.json';

i18n
  .use(LanguageDetector) // Tilni avtomatik aniqlash
  .use(initReactI18next) // React bilan i18n ni bog'lash
  .init({
    fallbackLng: 'uz', // Default til
    lng: i18n.language, // Joriy til
    debug: true, // Debug rejim
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
  });

export default i18n;
