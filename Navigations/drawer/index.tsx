import { createDrawerNavigator } from "@react-navigation/drawer";
import DasmGranth from "../../screens/DasamGranth";
import Setting from "../../screens/Setting";
import BanisHome from "../../screens/BanisHome";
import { MaterialIcons, Foundation } from "@expo/vector-icons";
import { colors } from "../../constant/colors/color";
import About from "../../screens/About";
import Hukamanama from "@/screens/Hukamnama";

const RouterDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="ਗੁਰਬਾਣੀ"
        component={BanisHome}
        options={{
          drawerActiveTintColor: colors.orange,
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: "orange",
          headerTitleStyle: { fontWeight: "bold" },
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color="orange" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="DasmGranth"
        component={DasmGranth}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Foundation
              name="book-bookmark"
              style={{ color: "rgb(50,150,230)" }}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Hukamnama"
        component={Hukamanama}
        options={{
          headerShown:false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-numbered"
              style={{ color: colors.purple }}
              color={color}
              size={size}
            />
          ),
        }}
        />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerActiveTintColor: colors.secondarypurple,
          headerTintColor: colors.secondarypurple,
          headerTitleStyle: { fontWeight: "bold" },
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="info"
              style={{ color: colors.secondarypurple }}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="setting"
        component={Setting}
        options={{
          drawerActiveTintColor: colors.purple,
          headerTintColor: colors.brown,
          headerTitleStyle: { fontWeight: "bold" },
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
              name="anchor"
              style={{ color: colors.purple }}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default RouterDrawer;
