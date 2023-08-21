import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({ verses}) => {
    
    return (
        <FlatList
            data={verses}
            renderItem={({ item }) => (
                <View>
                    {item.header === 1 ? (
                        <Text style={styles.headingText}>{item?.verse?.verse?.unicode}</Text>
                    ) : item.header === 2 ? (
                        <Text style={styles.orangeHeadingText}>{item?.verse?.verse?.unicode}</Text>
                    ) : (
                        <Text style={styles.text}>{item?.verse?.verse?.unicode}</Text>
                    )}
                </View>
            )}
        />
    )
}
export default List;

const styles = StyleSheet.create({
    headingText: {
        color: 'orange',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center'
    },
    orangeHeadingText: {
        color: 'rgb(100, 240,100)',
        fontWeight: '300',
        fontSize: 18,
        textAlign: 'center'
    },
    text: {
        color: 'rgb(200, 200, 200)',
        fontWeight: '200',
        fontSize: 17,
        textAlign: 'center'
    },
})
