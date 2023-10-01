import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import List from "../components/List";
import useVerses from "../hooks/useVerses";

const SidhGost = () => {
  const Route = "/34";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};

export default SidhGost;
