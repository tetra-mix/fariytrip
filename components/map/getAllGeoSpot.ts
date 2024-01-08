import latlng from "../types/latlng";
import geojson from "../types/geojson";
import apispot from "../types/apispot";
import GeoSpot from "../types/geospot";

async function getAllGeoSpot() {
    const URL = "https://b7n2qxblow4om6qgjdmyezozg40txwpx.lambda-url.ap-northeast-1.on.aws/";
    const response = await fetch(URL);
    const data:GeoSpot[] = await response.json();
    return data;
}

export default getAllGeoSpot;