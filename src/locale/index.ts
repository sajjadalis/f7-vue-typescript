import { createI18n } from "vue-i18n";
import enUS from "./lang/en-US.json";
import urPK from "./lang/ur-PK.json";

// Read more about Typescript Support: https://vue-i18n.intlify.dev/guide/advanced/typescript.html
type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], "en-US" | "ur-PK">({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "en-US": enUS,
    "ur-PK": urPK,
  },
});

export default i18n;
