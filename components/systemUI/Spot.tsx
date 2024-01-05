import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import GeoSpot from '../interface/geospot';

export default function Spot() {

    const [spot, setSpot] = useState<GeoSpot[]>([]);

    useEffect(() => {
        const URL = "https://b7n2qxblow4om6qgjdmyezozg40txwpx.lambda-url.ap-northeast-1.on.aws/";

        async () => {
            
            fetch(URL)
            .then((response) => response.json())
            .then((json: GeoSpot[]) => {
                console.log(`json: ${json}`);
                setSpot(json);
            })
            .catch((error) => {
                console.error(error);
            });
        }

    })

    return (
        <ScrollView horizontal={true}>
        { /*
        <FlatList
            data={spot}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </>
            )}
        />
            */
        }
        <Text style={styles.title}>{ String(spot) }</Text>

        </ScrollView>
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
        width: '50%',
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