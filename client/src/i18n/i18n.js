import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website",
      language: "Language",
      description: "This is a multilingual React app",
    },
  },
  vi: {
    translation: {
      welcome: "Chào mừng bạn đến với trang web của chúng tôi",
      language: "Ngôn ngữ",
      description: "Đây là ứng dụng React đa ngôn ngữ",
    },
  },
};
i18n.use(initReactI18next).init({
    resources,
    lng: "vi",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
})

