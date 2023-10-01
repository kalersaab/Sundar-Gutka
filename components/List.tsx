import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constant/colors/color";
import { fontSize, headingText } from "../constant/layouts/layout";
import { View, Text } from "./themed";
const List = ({ verses }) => {
  return (
    <FlatList
      data={verses}
      renderItem={({ item }) => (
        <View>
          {item.header === 1 ? (
            <Text style={[styles.headingText, { color: colors.orange }]}>
              {item?.verse?.verse?.gurmukhi}
            </Text>
          ) : item.header === 2 ? (
            <Text style={styles.greenHeadingText}>
              {item?.verse?.verse?.gurmukhi}
            </Text>
          ) : (
            <>
              <Text style={styles.text}>{item?.verse?.verse?.gurmukhi}</Text>
              <Text
                style={{
                  color: colors.grey,
                  fontSize: fontSize.medium,
                  textAlign: "center",
                }}
              >
                {item?.verse?.translation?.pu?.ss?.unicode}
              </Text>
            </>
          )}
        </View>
      )}
    />
  );
};
export default List;

const styles = StyleSheet.create({
  headingText: {
    fontSize: headingText.xxl,
    textAlign: "center",
    fontFamily: "GurbaniAkharHeavy",
  },
  greenHeadingText: {
    color: colors.green,
    fontSize: headingText.xxl,
    textAlign: "center",
    fontFamily: "GurbaniAkharHeavy",
  },
  text: {
    fontSize: fontSize.large,
    textAlign: "center",
    fontFamily: "GurbaniAkharHeavy",
  },
});
