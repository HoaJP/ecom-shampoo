import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import NAVBAR_EN from "../locales/en/navbar.json";
import NAVBAR_VI from "../locales/vi/navbar.json";
export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};
const resources = {
  en: {
    navbar: NAVBAR_EN,
  },
  vi: {
    navbar: NAVBAR_VI,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["navbar"],
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
