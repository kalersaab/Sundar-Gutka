import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constant/colors/color";
import { fontSize, headingText } from "../constant/layouts/layout";
import { View, Text } from "./themed";
const List = ({ verses }: any) => {
  return (
    <FlatList
      style={{ margin: 15 }}
      data={verses}
      renderItem={({ item }) => (
        <View>
          {item.header === 1 ? (
            <Text style={[styles.headingText, { color: colors.brown }]}>
              {item?.verse?.verse?.gurmukhi}
            </Text>
          ) : item.header === 2 ? (
            <Text style={styles.purpleHeadingText}>
              {item?.verse?.verse?.gurmukhi}
            </Text>
          ) : (
            <>
              <Text style={styles.text}>{item?.verse?.verse?.gurmukhi}</Text>
              <Text
                style={{
                  color: colors.purple,
                  fontSize: fontSize.small,
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
  purpleHeadingText: {
    color: colors.secondarypurple,
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
