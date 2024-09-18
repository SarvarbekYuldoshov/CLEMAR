import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from "../public/locales/uzbek/uz.json"
import ruTranslation from "../public/locales/russian/ru.json"
import enTranslation from "../public/locales/english/en.json"
i18n
    .use(Backend)

    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'uz',
        lang: i18n.language,
        debug: true,
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
            en: { translation: enTranslation }
        }
    })


export default i18n;