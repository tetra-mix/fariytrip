import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../Themed';
import currentLocation from './currentLocation';
import getAllGeoSpot from './getAllGeoSpot';
import searchSpot from './searchSpot';
import getBas from './getBas';
import apispot from '../types/apispot';
import GeoSpot from '../types/geospot';
import latlng from '../types/latlng';
import { TextInput, Button } from 'react-native-paper';

export default function Main() {
    const [location, setLocation] = useState<latlng>();
    const [spot, setSpot] = useState<GeoSpot[]>([]);
    const [searchWord, setSearchWord] = useState<string>("");
    const [searchSpots, setSearchSpots] = useState<apispot[]>([]);
    const [basStops, setBasStops] = useState<apispot[]>([]);

    const search = () => {
        if (searchWord) {
            searchSpot(searchWord).then((spots: apispot[]) => {
                setSearchSpots(spots);
            });
        }
    }

    useEffect(() => {

        currentLocation().then((location) => {
            setLocation(location);
        });

        getAllGeoSpot().then((spot) => {
            setSpot(spot);
        });

        getBas('isecity', 'communitybus', 0).then((bas) => {
            setBasStops(bas);
        });

    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    textColor='black'
                    outlineColor='black'
                    cursorColor='black'
                    style={styles.seachBar}
                    placeholder="検索"
                    value={searchWord}
                    onChangeText={(text) => { setSearchWord(text) }}
                />
                <Button
                    textColor='black'
                    buttonColor='white'
                    style={styles.searchButton}
                    onPress={search}
                >
                    検索
                </Button>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 34.49122380150616,
                    longitude: 136.70955248156395,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsTraffic={true}
            >
                
                {
                    spot &&
                    spot.map((item) => (
                        <Marker
                            key={item.id}
                            coordinate={{ latitude: Number(item.lat), longitude: Number(item.lng) }}
                            title={item.name}
                            description={item.discription}
                        />
                    ))
                }
                {
                    searchSpots &&
                    searchSpots.map((item, i) => (
                        <Marker
                            key={i + 100}
                            coordinate={{ latitude: item.lat, longitude: item.lng }}
                            title={item.name}
                            pinColor='blue'
                        />
                    ))
                }
                {
                    basStops &&
                    basStops.map((item, i) => (
                        <Marker
                            key={i + 200}
                            coordinate={{ latitude: item.lat, longitude: item.lng }}
                            title={item.name}
                            pinColor='yellow'
                        />
                    ))
                }

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    searchContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: '1%',
        backgroundColor: 'rgba(255,255,255,0.0)',
        zIndex: 1,
    },
    seachBar: {
        width: '80%',
        marginRight: '1%',
        backgroundColor: 'white',
    },
    searchButton: {
        width: '10%',
        marginLeft: '1%'
    },
});