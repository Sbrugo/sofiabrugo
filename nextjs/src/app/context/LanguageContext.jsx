"use client";
import { createContext, useContext, useState, ReactNode } from "react";
const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("spanish");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "spanish" ? "english" : "spanish"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLang() {
  const context = useContext(LanguageContext);
  if (context == undefined) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context;
}
