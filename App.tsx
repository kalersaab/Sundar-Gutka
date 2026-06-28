import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Navigation from "./Navigations/Home";
import useColorScheme from "./hooks/useColorSchema";
import { View } from "./components/themed";
import useCachedResources from "./hooks/useCachedResources";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
      <GestureHandlerRootView style={{ flex: 1, backgroundColor:'white' }}>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <SettingsProvider>
              <PaperProvider>
                <Navigation colorScheme={colorScheme} />
              </PaperProvider>
            </SettingsProvider>
          </QueryClientProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    ) : (
      <SplashScreen />
    );
  }
};

export default App;
