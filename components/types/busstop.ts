export default interface busstio {
    type: string,
    properties: {
        stop_id: string,
        stop_name: string,
        zone_id: string,
        location_type: string
    },
    geometry: {
        type: string,
        coordinates: number[]
    }
}