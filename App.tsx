import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Navigation from "./Navigations/Home";
import useColorScheme from "./hooks/useColorSchema";
import { View } from "./components/themed";
import useCachedResources from "./hooks/useCachedResources";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaperProvider } from "react-native-paper";
import { TranslationProvider } from "./TranslationContext";

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
         <TranslationProvider>
        <PaperProvider>
          <Navigation colorScheme={colorScheme} />
        </PaperProvider>
        </TranslationProvider>
      </QueryClientProvider>
    ) : (
      <SplashScreen />
    );
  }
};

export default App;
