import React from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import List from "../components/List";
import useVerses from "../hooks/useVerses";
import SERVER from "../config/connection";

const Ugardanti = () => {
  const Route = "/53";
  const verses = useVerses(SERVER + Route);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};
export default Ugardanti;
