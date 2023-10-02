import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import List from "../components/List";
import useVerses from "../hooks/useVerses";
import SERVER from "../config/connection";

const DukhBhajni = () => {
  const Route = "/36";
  const verses = useVerses(SERVER + Route);

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <List verses={verses} />
    </SafeAreaView>
  );
};
export default DukhBhajni;
