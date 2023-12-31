import React from "react";
import { SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";
import SERVER from "../config/connection";
import Japjilist from "../components/List";
import useVerses from "../hooks/useVerses";

const Sastrnam = () => {
  const Route = "/19";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" hidden={true} />
      <Japjilist verses={verses} />
    </SafeAreaView>
  );
};
export default Sastrnam;
