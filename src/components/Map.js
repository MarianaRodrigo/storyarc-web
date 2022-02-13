import React, { useState, useEffect } from 'react'; 
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiamFyYmFzNzciLCJhIjoiY2t6bGp2MjY5MmdtdDJub2NmYXR6ZWE3ZiJ9.7tPF-rPpXiE99xWJUVKBbg';

function Map() {

  const [pageIsMounted, setPageIsMounted] = useState(false)

useEffect(() => {
    setPageIsMounted(true)
      const Map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
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

return(
  <div>{/*
  <mapboxgl.MapView 
    style={{ flex : 1 }}
    preferredFramesPerSecond={60}
    localizeLabels={true}
    logoEnabled={false} 
  >
    <mapboxgl.Camera zoomLevel={15.31} centerCoordinate={[-8.656, 40.638]} />
  </mapboxgl.MapView>
*/}
</div>
  )
}

export default Map