import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useGetBanis } from "../../hooks/query";
import { Text } from "../../components/themed";
import { fontSize } from "../../constant/layouts/layout";
import { StatusBar } from "expo-status-bar";

const Banis = ({ navigation }: any) => {
  const { data, isLoading }: any = useGetBanis();
  const filteredData = data?.filter((item: any) =>
    [1, 2, 3, 4, 7, 8, 9, 19, 20, 21, 25, 29, 30, 86].includes(item.ID)
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#555" />
        <Text style={styles.loadingText}>Loading Banis...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <StatusBar hidden/>
      <FlatList
      onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={({ item }) => (
          <SafeAreaView>
            <Pressable onPress={() => navigation.push("Gurbani", { id: item?.ID })}>
              <Text style={styles.text}>{item.gurmukhiUni}</Text>
            </Pressable>
          </SafeAreaView>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={(item) => item?.ID?.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.large,
    padding: 10,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
});

export default React.memo(Banis);
