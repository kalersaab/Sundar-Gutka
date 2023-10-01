import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JapjiSahib from "../screens/JapjiSahib";
import JaapSahib from "../screens/JaapSahib";
import Banis from "../screens/Banis";
import AkalUstat from "../screens/AkalUstat";
import ChoupaiSahib from "../screens/ChoupaiSahib";
import AnandSahib from "../screens/AnandSahib";
import ShabadHazaree from "../screens/ShabadHazare";
import ChandiChritr from "../screens/ChandiChritr";
import Chandiwar from "../screens/Chandiwar";
import Rehraas from "../screens/Rehraas";
import ShabadHazare from "../screens/ShabadHazare10";
import Sastrnam from "../screens/Sastrnam";
import BanisHome from "../screens/BanisHome";
import MoreBanis from "../screens/MoreBanis";
import Aarti from "../screens/Aarti";
import Sohila from "../screens/Sohila";
import Barahmanjh from "../screens/Barahmanjh";
import Sukhmana from "../screens/Sukhmana";
import Sukhmani from "../screens/Sukhmani";
import Ardas from "../screens/Ardas";
import Barahmah from "../screens/Barahmah";
import Bhagoti from "../screens/Bhagoti";
import Akal from "../screens/Akal";
import SlokMehla from "../screens/SlokMehla";
import BawanAkhri from "../screens/BawanAkhri";
import SidhGost from "../screens/SidhGost";
import DakhniOnkar from "../screens/DakhniOnkar";
import DukhBhajni from "../screens/DukhBhajni";
import Ugardanti from "../screens/Ugardanti";
import AasadiWar from "../screens/AasadiWar";
import { ColorSchemeName } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="ਗੁਰਬਾਣੀ"
          component={BanisHome}
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: "orange",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen name="MoreBanis" component={MoreBanis} />
        <Stack.Screen name="Banis" component={Banis} />
        <Stack.Screen name="japjiSahib" component={JapjiSahib} />
        <Stack.Screen name="ShabadHazaree" component={ShabadHazaree} />
        <Stack.Screen name="ShabadHazare" component={ShabadHazare} />
        <Stack.Screen name="JaapSahib" component={JaapSahib} />
        <Stack.Screen name="Akalustat" component={AkalUstat} />
        <Stack.Screen name="Chaupai" component={ChoupaiSahib} />
        <Stack.Screen name="AnadSahib" component={AnandSahib} />
        <Stack.Screen name="AthChandi" component={ChandiChritr} />
        <Stack.Screen name="Chandiwar" component={Chandiwar} />
        <Stack.Screen name="Sastrnam" component={Sastrnam} />
        <Stack.Screen name="Rehraas" component={Rehraas} />
        <Stack.Screen name="Aarti" component={Aarti} />
        <Stack.Screen name="Sohila" component={Sohila} />
        <Stack.Screen name="BarahManjh" component={Barahmanjh} />
        <Stack.Screen name="Sukhmani" component={Sukhmani} />
        <Stack.Screen name="Sukhmana" component={Sukhmana} />
        <Stack.Screen name="Ardas" component={Ardas} />
        <Stack.Screen name="Bhagoti" component={Bhagoti} />
        <Stack.Screen name="Barahmah" component={Barahmah} />
        <Stack.Screen name="Akal" component={Akal} />
        <Stack.Screen name="SlokMehla9" component={SlokMehla} />
        <Stack.Screen name="BawanAkhri" component={BawanAkhri} />
        <Stack.Screen name="SidhGost" component={SidhGost} />
        <Stack.Screen name="DakhniOnkar" component={DakhniOnkar} />
        <Stack.Screen name="DukhBhajni" component={DukhBhajni} />
        <Stack.Screen name="Ugardanti" component={Ugardanti} />
        <Stack.Screen name="AasadiWar" component={AasadiWar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
