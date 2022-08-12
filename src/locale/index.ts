import { createI18n } from "vue-i18n";
import enUS from "./en-US.json";
import urPK from "./ur-PK.json";

// Read more about Typescript Support: https://vue-i18n.intlify.dev/guide/advanced/typescript.html

const i18n = createI18n<false>({
	locale: "en-US",
	fallbackLocale: "en-US",
	messages: {
		'en-US': enUS,
		'ur-PK': urPK,
	},
});

export default i18n;
