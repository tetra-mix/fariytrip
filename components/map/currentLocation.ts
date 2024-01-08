import * as Location from 'expo-location';
import latlng from '../types/latlng';

async function currentLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return;
  }

  let location = await Location.getCurrentPositionAsync({});

  const latlng:latlng = { latitude: location.coords.latitude, longitude: location.coords.longitude}
  return latlng;
}

export default currentLocation;