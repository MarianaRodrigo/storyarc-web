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
  <div id="my-map" style={{ height: 500, width: 500 }} />
  )

}

export default Map