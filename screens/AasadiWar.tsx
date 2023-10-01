import React from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import List from "../components/List";
import useVerses from "../hooks/useVerses";
import { colors } from "../constant/colors/color";

const AasadiWar = () => {
  const Route = "/90";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};

export default AasadiWar;
