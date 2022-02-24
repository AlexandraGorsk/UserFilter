import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en/translation';
import { ru } from './ru/translation';

const locales = {
	ru,
	en,
};

i18n.use(initReactI18next).init({
	resources: locales,
	lng: 'en',
	fallbackLng: 'en',

	interpolation: {
		escapeValue: false,
	},
});
