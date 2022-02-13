import react from 'react';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiamFyYmFzNzciLCJhIjoiY2t6bGp2MjY5MmdtdDJub2NmYXR6ZWE3ZiJ9.7tPF-rPpXiE99xWJUVKBbg';

function mapbox() {

const Map = new mapboxgl.Map({
    container: 'Map',
    style: 'mapbox://styles/mapbox/streets-v11'
    });

return(
  <Map id="Map"></Map>
)

}

export default mapbox