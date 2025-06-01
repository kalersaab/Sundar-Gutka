import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { useGetsingleBanis } from "../../hooks/query";
import List from "../../components/List";

const Gurbani = ({route}:any) => {

  const Route = route?.params?.id;
  const {data:verses, isLoading} = useGetsingleBanis({pathParams:{id:Route}})
  return (
    <SafeAreaView style={{flex: 1,}}>
      <StatusBar hidden translucent/>
      <List verses={verses} isLoading={isLoading} />
    </SafeAreaView>
  );
};
export default Gurbani;
