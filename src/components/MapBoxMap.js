import Map,{Marker} from "react-map-gl";


export default function MapBoxMap() {
  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: -8.656528,
        latitude: 40.62899,
        zoom: 15.31,

      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      logoPosition="bottom-right"
      >

    <Marker longitude={-8.656528} latitude={40.62899}  >
      <img src="/images/Marker.png" alt="Marker map png"/>
    </Marker>
      
    </Map>
  );
}
