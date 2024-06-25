import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import UserState from "../Contexts/UserState";
import RouterDrawer from "./drawer";
import Gurbani from "../screens/Gurbani";
import Banis from "../screens/Banis";
import MoreBanis from "../screens/MoreBanis";
import BanisHome from "../screens/BanisHome";

const Stack = createNativeStackNavigator();

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <UserState>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Drawer"
        >
          <Stack.Screen
            name="Drawer"
            component={RouterDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ਗੁਰਬਾਣੀ"
            component={BanisHome}
            options={{
              //drawerActiveTintColor: colors.orange,
              headerShown: true,
              headerTitleAlign: "center",
              headerTintColor: "orange",
              headerTitleStyle: { fontWeight: "bold" },
              //drawerIcon: ({ color, size }) => (
              //   <MaterialIcons name="home" color="orange" size={size} />
              // ),
            }}
          />
          <Stack.Screen name="MoreBanis" component={MoreBanis} />
          <Stack.Screen
            name="Banis"
            component={Banis}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Gurbani" component={Gurbani} />
        </Stack.Navigator>
      </UserState>
    </NavigationContainer>
  );
};
export default Navigation;
