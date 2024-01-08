import React from 'react';
import { View, Text } from '../Themed';
import Routing from 'react-native-leaflet-routing';

export default function Routing() {

    return (
        <Routing
            from={[51.5, -0.1]}
            to={[48.85, 2.35]}
        />
    )
}