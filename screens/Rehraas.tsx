import React from "react";
import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import List from "../components/List";
import useVerses from "../hooks/useVerses";
import { SafeAreaView } from "react-native";

const Rehraas = () => {
  const Route = "/21";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};

export default Rehraas;
