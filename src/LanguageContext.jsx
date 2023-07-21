// LanguageContext.js
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState("en"); // Default language is set to English (en)

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
