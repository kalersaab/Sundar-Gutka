import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const ITEMS_PER_PAGE = 10; // Number of items per page

const SriDasam = () => {
    const [data, setData] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(1);

    const GetAPIdata = async (page: any) => {
        try {
            const res = await axios.get(`https://api.banidb.com/v2/angs/${page}/G`);
            setData((prevData: any) => [...prevData, ...res?.data?.page || []]);
            setTotalPages(res?.data?.totalPages || 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleLoadMore = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            GetAPIdata(nextPage);
            setCurrentPage(nextPage);
        }
    };

    useEffect(() => {
        GetAPIdata(currentPage);
    }, []);

    return (
        <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.text}>{item?.verse?.unicode}</Text>
                        <Text style={[styles.text],{color:'wheat', fontSize:20}}>{item?.translation?.en?.bdb}</Text>
                    </View>
                )}
                keyExtractor={(item) => item?.verseId?.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1} // Adjust this threshold as needed
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        alignContent: 'center',
        fontSize: 25,
        padding: 10,
    }
});

export default SriDasam;
