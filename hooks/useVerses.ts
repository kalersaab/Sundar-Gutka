import AsyncStorage from '@react-native-async-storage/async-storage';
import { Verse } from '../types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useVerses = (apiEndpoint: any) => {
    const [verses, setVerses] = useState<Verse[]>([]);

    const storeVerses = async (data: Verse[]) => {
        try {
            await AsyncStorage.setItem('verses', JSON.stringify(data));
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const getStoredVerses = async () => {
        try {
            const storedData = await AsyncStorage.getItem('verses');
            if (storedData) {
                return JSON.parse(storedData);
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