import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';

i18n.use(Backend).use(LanguageDetector).init({
    whitelist: [
        'en-us', 'zh-tw'
    ],

    fallbackLng: 'en-us',

    preload: [
        'en-us', 'zh-tw'
    ],

    // have a common namespace used around the full app
    ns: [
        'common', 'counter'
    ],

    defaultNS: 'common',

    debug: false,

    load: 'currentOnly',

    lowerCaseLng: true,

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json',
        jsonIndent: 2
    }
});

export default i18n;
