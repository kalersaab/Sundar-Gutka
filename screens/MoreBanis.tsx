import React from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import navigateToScreen from "../utils/NavigatetoScreen";
import useData from "../hooks/useData";
import { colors } from "../constant/colors/color";
import { fontSize } from "../constant/layouts/layout";
import { View, Text } from "../components/themed";

const Banis = () => {
  const navigation = useNavigation();
  const data = useData();
  const filteredData = data.filter((item, index) =>
    [
      22, 24, 26, 27, 28, 31, 32, 33, 34, 48, 50, 52, 53, 54, 61, 62, 68,
    ].includes(index)
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => navigateToScreen(item, navigation)}>
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
