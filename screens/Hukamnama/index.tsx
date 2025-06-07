import { SafeAreaView,StyleSheet } from 'react-native'
import { View, Text } from '@/components/themed'
import React from 'react'
import { useLarivaar, useTranslation } from '@/TranslationContext'
import { useGetHukamnama } from '@/hooks/query'
import { FlatList } from 'react-native-gesture-handler'
import List from '@/components/List'
import { parseVisraam } from '@/config'
import { colors } from '@/constant/colors/color'
import { fontSize, headingText } from '@/constant/layouts/layout'

const Hukamanama = () => {
  const { larivaar } = useLarivaar()
  const { showTranslation } = useTranslation()
  const {data:getHukamnama, isLoading}:any = useGetHukamnama()
  const getHukam = getHukamnama?.shabads.map((item:any) => item.verses).flat()
  const visraam= getHukam?.map((item: any) => item?.visraam)
  const visraamPositions = parseVisraam(visraam);
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FlatList
      data={getHukam}
      renderItem={({item,index}) =>{
        return (
       <SafeAreaView style={{flex:1, justifyContent:'center', marginHorizontal: larivaar?10:0 }}>
                   <>
                 {  larivaar?
                 (<Text style={styles.text}>{item?.larivaar.gurmukhi}</Text>):
                 (
                     <GurbaniVerse 
                       gurmukhi={item?.verse?.gurmukhi} 
                       visraamPosition={visraamPositions[index] || {}} 
                     />)}
                     {showTranslation && (
                       <Text style={styles.translationText}>
                         {item?.verse?.translation?.pu?.ss?.unicode}
                       </Text>
                     )}
                   </>
               </SafeAreaView>
      )}}
      />
    </SafeAreaView>
  )

}
const GurbaniVerse = ({ gurmukhi, visraamPosition }:any) => {
  if (!gurmukhi) return null;
  
  const words = gurmukhi.split(' ');
  
  return (
    <SafeAreaView style={styles.lineContainer}>
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
    </SafeAreaView>
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


export default Hukamanama;

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
    marginBottom: 8,
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
    marginTop: 20,
    fontSize: fontSize.medium,
    color: colors.purple,
  },
});