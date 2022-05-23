import {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";
import en from "src/data/locales/en/translation.json";
import id from "src/data/locales/id/translation.json";

type LanguageContextProps = {
  language?: string;
  setLanguage?: any;
};

const LanguageContext = createContext<LanguageContextProps>({});

function useLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  return [language, setLanguage];
}

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const languageStorage = localStorage.getItem("lang") === "id" ? "id" : "en";
    setLanguage(languageStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

function translation() {
  const { language } = useContext(LanguageContext);

  if (language === "id") {
    return id;
  }

  return en;
}

export { LanguageProvider, useLanguage, translation };
