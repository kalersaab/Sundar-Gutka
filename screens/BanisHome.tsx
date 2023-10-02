import { SafeAreaView, StyleSheet, StatusBar, Pressable } from "react-native";
import { Text, View } from "../components/themed";
import { useNavigation } from "@react-navigation/native";

const BanisHome = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Pressable onPress={() => navigation.navigate("Banis")}>
        <Text style={styles.text}>ਨਿਤਨੇਮ</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("MoreBanis")}>
        <Text style={styles.text}>ਬੇਅੰਤ ਬਾਣੀ</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default BanisHome;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    textAlign: "center",
  },
});
