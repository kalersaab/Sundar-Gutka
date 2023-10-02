import { StyleSheet } from "react-native";
import React from "react";
import { fontSize } from "../../constant/layouts/layout";
import { View, Text } from "../../components/themed";
import { colors } from "../../constant/colors/color";

const About = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: fontSize.medium }}>
        This App is in Progress{"\n"} for Android and IOS
      </Text>
      <Text style={{ fontSize: fontSize.xsmall, color: colors.orange }}>
        Created By {"\n"} Gurwinder Singh
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
