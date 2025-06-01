import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TranslationContextType = {
  showTranslation: boolean;
  toggleTranslation: () => void;
};

const TranslationContext = createContext<TranslationContextType>({
  showTranslation: true,
  toggleTranslation: () => {},
});

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [showTranslation, setShowTranslation] = useState(true);

  useEffect(() => {
    (async () => {
      const storedValue = await AsyncStorage.getItem("showTranslation");
      if (storedValue !== null) {
        setShowTranslation(JSON.parse(storedValue));
      }
    })();
  }, []);

  const toggleTranslation = async () => {
    const newValue = !showTranslation;
    setShowTranslation(newValue);
    await AsyncStorage.setItem("showTranslation", JSON.stringify(newValue));
  };

  return (
    <TranslationContext.Provider value={{ showTranslation, toggleTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
