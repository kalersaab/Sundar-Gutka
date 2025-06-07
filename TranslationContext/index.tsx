import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TranslationContextType = {
  showTranslation: boolean;
  toggleTranslation: () => void;
};

type LarivaarContextType = {
  larivaar: boolean;
  toggleLarivaar: () => void;
};

type CombinedSettingsContextType = {
  translation: TranslationContextType;
  larivaar: LarivaarContextType;
};

const defaultState: CombinedSettingsContextType = {
  translation: {
    showTranslation: true,
    toggleTranslation: () => {},
  },
  larivaar: {
    larivaar: true,
    toggleLarivaar: () => {},
  },
};

const SettingsContext = createContext<CombinedSettingsContextType>(defaultState);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [showTranslation, setShowTranslation] = useState(true);
  const [larivaar, setLarivaar] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const [translationValue, larivaarValue] = await Promise.all([
          AsyncStorage.getItem("showTranslation"),
          AsyncStorage.getItem("larivaar"),
        ]);

        if (translationValue !== null) {
          setShowTranslation(JSON.parse(translationValue));
        }
        if (larivaarValue !== null) {
          setLarivaar(JSON.parse(larivaarValue));
        }
      } catch (error) {
        console.error("Failed to load settings", error);
      }
    };

    loadSettings();
  }, []);

  const toggleTranslation = async () => {
    const newValue = !showTranslation;
    setShowTranslation(newValue);
    await AsyncStorage.setItem("showTranslation", JSON.stringify(newValue));
  };

  const toggleLarivaar = async () => {
    const newValue = !larivaar;
    setLarivaar(newValue);
    await AsyncStorage.setItem("larivaar", JSON.stringify(newValue));
  };

  const value = {
    translation: {
      showTranslation,
      toggleTranslation,
    },
    larivaar: {
      larivaar,
      toggleLarivaar,
    },
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useTranslation = () => useContext(SettingsContext).translation;
export const useLarivaar = () => useContext(SettingsContext).larivaar;