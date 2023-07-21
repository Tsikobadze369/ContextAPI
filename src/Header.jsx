// Header.js
import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./App.css";

const Header = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    handleChangeLanguage(newLanguage);
  };

  return (
    <header className="header">
      <h1>{language === "en" ? "Todo App" : "გასაკეთებელი საქმეები"}</h1>
      <div className="select-container">
        <select
          onChange={handleLanguageChange}
          value={language}
          className="language-select"
        >
          <option value="en">English</option>
          <option value="ka">Georgian</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
