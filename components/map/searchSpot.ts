import latlng from "../types/latlng";
import geojson from "../types/geojson";
import apispot from "../types/apispot";
import GeoSpot from "../types/geospot";

async function searchSpot(keyword: string) {
    const url = `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${encodeURIComponent(keyword)}`
    const response = await fetch(url);
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {

        let res: apispot[] = [];

        data.map((spot: geojson) => {
            const coordinates = spot.geometry.coordinates;
            const loc: latlng = { latitude: coordinates[1], longitude: coordinates[0] };
            const name: string = spot.properties.title;
            const locspot: apispot = { lat: loc.latitude, lng: loc.longitude, name: name }
            res.push(locspot);
        });

        return res;
    } else {
        return [];
    }
}

export default searchSpot;