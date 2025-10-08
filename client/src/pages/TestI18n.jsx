import React from "react";
import { useTranslation } from "react-i18next";
const TestI18n = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng)=>{
    i18n.changeLanguage(lng)
  }
  return (
    <div className="max-padd-container pt-28">
      <div>{t("welcome")}</div>
      <div>{t("language")}</div>
      <div>{t("description")}</div>

      <div>
        <button onClick={()=>changeLanguage("vi")}>Tiếng Việt</button>
        <button onClick={()=>changeLanguage("en")}>Enlish</button>
      </div>
    </div>
  );
};

export default TestI18n;
