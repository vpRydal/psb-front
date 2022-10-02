import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import Locale from '@specs/ui/locale';
import en from '@translations/en/translation.json';
import ru from '@translations/ru/translation.json';

const translatorPromise = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: Locale.ru,
    returnEmptyString: false,
    keySeparator: false,
    nsSeparator: ':::',
    debug: false,
    fallbackLng: Locale.ru,
    react: {
      useSuspense: false,
    },
    pluralSeparator: '____',
    interpolation: { escapeValue: false }, // React already does escaping
    resources: {
      [Locale.ru]: {
        translation: ru,
      },
      [Locale.en]: {
        translation: en,
      },
    },
  });

export default i18next;

export {
  translatorPromise,
};
