import React from "react";
import { StyleSheet, Switch } from "react-native";
import { View, Text } from "../../components/themed";
import { colors } from "../../constant/colors/color";
import { fontSize } from "../../constant/layouts/layout"
import { useTranslation } from "../../TranslationContext";

const Setting = () => {
  const { showTranslation, toggleTranslation } = useTranslation();

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <Text style={styles.title}>Show Translation</Text>
        <Switch
          value={showTranslation}
          onValueChange={toggleTranslation}
          trackColor={{ false: colors.grey, true: colors.purple }}
          thumbColor={showTranslation ? colors.secondarypurple : colors.white}
        />
      </View>
      <Text style={styles.statusText}>
        Translation is {showTranslation ? "On" : "Off"}
      </Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: fontSize.large,
  },
  statusText: {
    fontSize: fontSize.medium,
    color: colors.grey,
    textAlign: "center",
  },
});
