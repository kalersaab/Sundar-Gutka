import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Navigation from "./Navigations/Home";
import useColorScheme from "./hooks/useColorSchema";
import { View } from "./components/themed";
import useCachedResources from "./hooks/useCachedResources";

const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image source={require("./assets/splash.png")} />
  </View>
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Adjust the time as needed
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return isLoaded ? (
      <Navigation colorScheme={colorScheme} />
    ) : (
      <SplashScreen />
    );
  }
};

export default App;
