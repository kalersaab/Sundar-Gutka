import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { useGetsingleBanis } from "../../hooks/query";
import List from "../../components/List";

const Gurbani = ({route}:any) => {

  const Route = route?.params?.id;
  const verses = useGetsingleBanis({pathParams:{id:Route}})
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
      <StatusBar barStyle="light-content"/>
      <List verses={verses} />
    </SafeAreaView>
  );
};
export default Gurbani;
