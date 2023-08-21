import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SERVER from '../config/connection';
import List from '../components/List';
import useVerses from '../hooks/useVerses';

const Sukhmana = () => {
    const Route = '/32'
    const verses = useVerses(SERVER + Route);
    return (
        <View style={{ backgroundColor: 'black', flex:1}}>
            <StatusBar backgroundColor='white' hidden={true}/>
            <List verses={verses} />
        </View>
    );
};

export default Sukhmana;