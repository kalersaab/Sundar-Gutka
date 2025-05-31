import React from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { useGetBanis } from "../../hooks/query";
import { View, Text } from "../../components/themed";
import { fontSize } from "../../constant/layouts/layout";
import { colors } from "../../constant/colors/color";


const Banis = ({navigation}:any) => {
 
  const data:any = useGetBanis();
  const filteredData = data?.data?.filter((item: any, index: number) =>
    [1, 2, 3, 4, 7, 8, 9, 19, 20, 21, 25, 29, 30, 86].includes(index)
  );

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:"#fff" }}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => navigation.push("Gurbani", {id:item?.ID})}>
              <Text style={styles.text}>{item.gurmukhiUni}</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item?.ID?.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.large,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
    textAlign: "center",
  },
});

export default React.memo(Banis);
