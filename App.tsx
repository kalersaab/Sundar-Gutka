import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Navigation from "./Navigations/Home";
import useColorScheme from "./hooks/useColorSchema";
import { View } from "./components/themed";
import useCachedResources from "./hooks/useCachedResources";
import { PaperProvider } from "react-native-paper";

import  "react-native-gesture-handler"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SettingsProvider } from "./TranslationContext";

const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image source={require("./assets/splash.png")} />
  </View>
);
export const queryClient = new QueryClient();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); 
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return isLoaded ? (
      <QueryClientProvider client={queryClient}>
         <SettingsProvider>
        <PaperProvider>
          <Navigation colorScheme={colorScheme} />
        </PaperProvider>
        </SettingsProvider>
      </QueryClientProvider>
    ) : (
      <SplashScreen />
    );
  }
};

export default App;
