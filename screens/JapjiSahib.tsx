import React from "react";
import { SafeAreaView } from "react-native";

import { StatusBar } from "react-native";
import SERVER from "../config/connection";
import Japjilist from "../components/List";
import useVerses from "../hooks/useVerses";

const JapjiSahib = () => {
  const Route = "/2";
  const verses = useVerses(SERVER + Route);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" hidden={true} />
      <Japjilist verses={verses} />
    </SafeAreaView>
  );
};
export default JapjiSahib;
