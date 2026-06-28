import { StatusBar } from "react-native";
import { useGetsingleBanis } from "../../hooks/query";
import List from "../../components/List";
import { View } from "@/components/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Gurbani = ({route}:any) => {

  const Route = route?.params?.id;
  const {data:verses, isLoading} = useGetsingleBanis({pathParams:{id:Route}})
  return (
    <SafeAreaView style={{ flex:1}}>
      <StatusBar translucent />
      <List verses={verses} isLoading={isLoading} />
    </SafeAreaView>
  );
};
export default Gurbani;
