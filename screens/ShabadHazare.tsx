import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import List from "../components/List";
import useVerses from "../hooks/useVerses";
import { SafeAreaView } from "react-native-safe-area-context";

const ShabadHazaree = () => {
  const Route = "/3";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};

export default ShabadHazaree;
