export default interface geojson {
    geometry: {
        coordinates: number[]
        type : string
    },
    type : string,
    properties : {
        addressCode : string,
        title: string,
    }
}