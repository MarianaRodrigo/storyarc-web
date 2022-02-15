import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

function Map () {


  const [viewport,setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 40.628990,
    longitude: -8.656528,
    zoom: 11
})



  return (
    <ReactMapGL
      mapStyle='mapbox://styles/jarbas77/ckznd207u000j15np92ipwqk5'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport} onViewportChange={(nextViewport) => setViewport(nextViewport)}
    > 
  </ReactMapGL>
  )
}

export default Map;

  /*
  const [pageIsMounted, setPageIsMounted] = useState(false)

useEffect(() => {
    setPageIsMounted(true)
      const Map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/dark-v10", // Tema Dark v-10
        center:[-8.656528, 40.628990], // Posição inicial [lng, lat]
        zoom: 15, // Zoom Inicial
      }); 

      Map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
    }, [])



    <mapboxgl.MapView 
  id="my-map"
      style={{ flex : 1 }}
      preferredFramesPerSecond={60}
      localizeLabels={true}
      logoEnabled={false} 
    >
      <mapboxgl.Camera zoomLevel={15.31} centerCoordinate={[-8.656, 40.638]} />
    </mapboxgl.MapView>

    */