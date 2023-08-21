import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({ verses }) => {
    return (
        <FlatList
            data={verses}
            renderItem={({ item }) => (
                <View>
                    <Text style={styles.text}>{item?.verse?.verse?.unicode}</Text>

                </View>
            )}
        />
    )
}

export default List;

const styles = StyleSheet.create({
    text: {
        color: 'rgb(200, 200, 200)',
        fontWeight:"bold",
        fontSize: 20,
        textAlign: 'center'
    },
})