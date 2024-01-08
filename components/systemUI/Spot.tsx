import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../Themed';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import GeoSpot from '../types/geospot';
import getAllGeoSpot from '../map/getAllGeoSpot';

export default function Spot() {

    const [spot, setSpot] = useState<GeoSpot[]>([]);

    useEffect(() => {
        getAllGeoSpot().then((spot) => {
            setSpot(spot);
        });
    }, [])

    return (
        <View style={styles.container}>
            {
                <FlatList
                    horizontal={true}
                    data={spot}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.content}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.description}>
                                {item.genre}
                            </Text>
                            <Text style={styles.description}>
                                {
                                    item.discription ?
                                        item.discription
                                        :
                                        "説明文はありません。"
                                }
                            </Text>
                        </View>

                    )}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        width: '100%',
        flexDirection: 'row',
    },
    content: {
        width: 200,
        margin: 10,
        padding: 10,
        backgroundColor: 'gray',
        color: 'white',
        borderRadius: 10,
        border: 'solid',
        borderColor: 'white',
        borderWidth: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
    },

});