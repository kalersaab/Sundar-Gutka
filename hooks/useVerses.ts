import AsyncStorage from '@react-native-async-storage/async-storage';
import { verses } from '../types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SERVER from '../config/connection';

const useVerses = (apiEndpoint) =>{
    const [verses, setVerses] = useState<verses[]>([]);

    const storeVerses = async (data: verses[]) => {
        try {
            await AsyncStorage.setItem('verses', JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    };
    const getStoredVerses = async () => {
        try {
            const storedData = await AsyncStorage.getItem('verses');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setVerses(parsedData);
            }
        } catch (error) {
            console.log(error);
            getStoredVerses();
        }
    };
    const GetAPIdata = async () => {
        try {
            const res = await axios.get(apiEndpoint);
            const apiVerses = (res?.data?.verses || []);
            setVerses(apiVerses);
            storeVerses(apiVerses);
            
        } catch (error) {
            console.log(error);
            getStoredVerses();
        }
    };

    useEffect(() => {
        GetAPIdata();
    }, [apiEndpoint]);
    return verses;
}
export default useVerses;