import { SafeAreaView, Text, StyleSheet, StatusBar, Pressable } from "react-native"

const BanisHome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar hidden />
            <Pressable onPress={()=>navigation.navigate('Banis')}>
                <Text style={styles.text}>ਨਿਤਨੇਮ</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('MoreBanis')}>
                <Text style={styles.text}>ਬੇਅੰਤ ਬਾਣੀ</Text>
            </Pressable>
        </SafeAreaView>
    )
}
export default BanisHome;

const styles = StyleSheet.create({
    text: {
        color: 'rgb(200, 200, 200)',
        fontSize: 20,
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        textAlign: 'center'
    },
});