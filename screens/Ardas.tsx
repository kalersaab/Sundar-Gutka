import React from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import List from "../components/List";
import useVerses from "../hooks/useVerses";

const Ardas = () => {
  const Route = "/24";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};

export default Ardas;
