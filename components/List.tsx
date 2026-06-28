import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { colors } from "../constant/colors/color";
import { fontSize, headingText } from "../constant/layouts/layout";
import { View, Text } from "./themed";
import { useLarivaar, useTranslation } from "../TranslationContext";
import { parseVisraam } from "../config";

const List = ({ verses, isLoading }: any) => {
  const { showTranslation } = useTranslation();
  const{ larivaar } = useLarivaar();
  const visraam= verses?.verses.map((item: any) => item?.verse?.visraam)
const visraamPositions = parseVisraam(visraam);
  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.secondarypurple} />
        <Text style={styles.loadingText}>Loading verses...</Text>
      </View>
    );
  }

    return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={verses?.verses}
      keyExtractor={(item, index) => `${item?.verse?.verse?.ID || index}`}
      renderItem={({ item, index }) => (
        <View>
          {item.header === 1 ? (
            <Text style={[styles.headingText, { color: colors.purple }]}>
              {larivaar?item?.verse?.larivaar.gurmukhi: item?.verse?.verse?.gurmukhi}
            </Text>
          ) : item.header === 2 ? (
            <Text style={styles.purpleHeadingText}>
              {larivaar?item?.verse?.larivaar.gurmukhi:item?.verse?.verse?.gurmukhi}
            </Text>
          ) : (
            <>
          {  larivaar?
          (<Text style={styles.text}>{item?.verse?.larivaar.gurmukhi}</Text>):
          (
              <GurbaniVerse 
                gurmukhi={item?.verse?.verse?.gurmukhi} 
                visraamPosition={visraamPositions[index] || {}} 
              />)}
              {showTranslation && (
                <Text style={styles.translationText}>
                  {item?.verse?.translation?.pu?.ss?.unicode}
                </Text>
              )}
            </>
          )}
        </View>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.emptyText}>No verses found.</Text>
      )}
    />
  );
};

const GurbaniVerse = ({ gurmukhi, visraamPosition }:any) => {
  if (!gurmukhi) return null;
  
  const words = gurmukhi.split(' ');
  
  return (
    <View style={styles.lineContainer}>
      {words.map((word:any, index:any) => (
        <Text
          key={`word-${index}`}
          style={[
            styles.text,
            getVisraamStyle(index, visraamPosition)
          ]}
        >
          {word}{' '}
        </Text>
      ))}
    </View>
  );
};

// Get style for visraam positions
const getVisraamStyle = (
  index: number,
  visraamPosition: Record<number, string>
) => {
  const visraamType = visraamPosition[index];
  
  switch (visraamType) {
    case 'v':
      return styles.heavyPause;
    case 'y':
      return styles.lightPause;
    default:
      return null;
  }
};


export default List;

const styles = StyleSheet.create({
    heavyPause: {
    color: colors.orange,
    fontFamily: "GurbaniAkharHeavy",
  },
  lightPause: {
    color: colors.green,
    fontFamily: "GurbaniAkharHeavy",
  },
  normalText: {
    color: colors.black,
  },
  lineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: headingText.xxl,
    textAlign: "center",
    fontFamily: "GurbaniAkharHeavy",
  },
  purpleHeadingText: {
    color: colors.secondaryRed,
    fontSize: headingText.xxl,
    textAlign: "center",
    fontFamily: "GurbaniAkharHeavy",
  },
  text: {
    fontSize: fontSize.large,
    textAlign: "center",
    fontFamily: "GurbaniAkharHeavy",
  },
  translationText: {
    color: colors.lightorange,
    fontSize: fontSize.medium,
    textAlign: "center",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: fontSize.medium,
    color: colors.purple,
  },
  emptyText: {
    textAlign: "center",
    fontSize: fontSize.medium,
    color: colors.purple,
  },
});
