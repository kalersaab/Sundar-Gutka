import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import navigateToScreen from '../utils/NavigatetoScreen';
import useData from '../hooks/useData';

const Banis= () => {
    const navigation = useNavigation();
   const data = useData();
    const filteredData = data.filter((item, index) => [1, 2, 3, 4, 7, 8, 9, 19,20, 21, 25, 29, 30].includes(index));
    
    return (
        <View style={{ flex:1, backgroundColor: 'rgb(10,10,10)' }}>
          <StatusBar hidden />
            <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                  <View>
                    <Pressable  onPress={()=>navigateToScreen(item, navigation)}>
                    <Text style={styles.text}>{item.gurmukhiUni}</Text>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item?.ID?.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'rgb(200, 200, 200)',
        fontSize: 20,
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        textAlign:'center'
    },
});

export default React.memo(Banis);
