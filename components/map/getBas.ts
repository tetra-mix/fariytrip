import geojson from "../types/geojson";
import apispot from "../types/apispot";
import busstop from "../types/busstop";

async function getBas(organization_id: string, feed_id: string, busapikind: number ): Promise<apispot[]> {
    
    let lasturl = "stops.geojson";
    switch (busapikind) {
        case 0:
            lasturl = 'stops.geojson'
        case 1:
            lasturl = 'routes.geojson'
        case 2:
            lasturl = 'tracking.geojson'
        default:
            lasturl = "stops.geojson";
    }
    //const baseurl = 'https://api.gtfs-data.jp/v2/organizations/' + organization_id + '/feeds/' + feed_id + "/files/stops.geojson";
    const url = `https://api.gtfs-data.jp/v2/organizations/${organization_id}/feeds/${feed_id}/files/${lasturl}`;
    const response = await fetch(url);
    const data: any = await response.json();
    const busstop: busstop[] = data.features; 
    if (Array.isArray(busstop) && busstop.length > 0) {

        let res: apispot[] = [];

        busstop.map((spot: busstop) => {
            const coordinates = spot.geometry.coordinates;
            const name: string = spot.properties.stop_name;
            const locspot: apispot = { lat: coordinates[1], lng: coordinates[0], name: name }
            res.push(locspot);
        });

        return res;
    } else {
        return [];
    }
}

export default getBas;