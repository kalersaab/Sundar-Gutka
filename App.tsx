import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Home from './Navigations/Home';

const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('./assets/splash.png')} />
  </View>
);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Adjust the time as needed
  }, []);

  return isLoaded ? <Home /> : <SplashScreen />;
};

export default App;
