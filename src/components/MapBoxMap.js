import Map, {Marker} from "react-map-gl";
import db from "../../db.json";
import Link from 'next/link'



export default function MapBoxMap() {

  const posts = db.posts;


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

    {/*<Link href={`/Posts/${encodeURIComponent(posts.location)}`}> */}
    {posts.map((post) => (      
      <Marker 
          longitude={-8.656528} 
          latitude={40.62899}
          id={`${post.id}`}
          key={post.id}
          
          /*coordinate={[posts.location[0], posts.location[0]]} */ 
          
          >
        <img src="/images/Marker.png" alt="Marker map png"/>
      </Marker> 
    ))}
    {/*</Link>*/}
  </Map>  
  );
}
