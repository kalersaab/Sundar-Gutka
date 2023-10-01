import React from "react";
import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import List from "../components/List";
import useVerses from "../hooks/useVerses";
import { SafeAreaView } from "react-native";
import { colors } from "../constant/colors/color";

const JaapSahib = () => {
  const Route = "/4";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};
export default JaapSahib;
