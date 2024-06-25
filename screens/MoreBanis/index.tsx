import React from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useGetBanis } from "../../hooks/query";
import { View, Text } from "../../components/themed";
import { fontSize } from "../../constant/layouts/layout";
import { colors } from "../../constant/colors/color";

const Banis = ({navigation}:any) => {
  const data = useGetBanis();
  const filteredData = data?.data?.filter((index: number) =>
    [
      11, 12, 22, 24, 26, 27, 28, 31, 32, 33, 34, 48, 50, 52, 53, 54, 61, 62,
      68,
    ].includes(index)
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() =>  navigation.push("Gurbani", {id:item?.ID})}>
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
