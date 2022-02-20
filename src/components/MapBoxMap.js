/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Map, { Marker } from "react-map-gl";
import db from "../../db.json";

export default function MapBoxMap() {
  const locations = db.locations;

  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: -8.656528,
        latitude: 40.62899,
        zoom: 15.31,
      }}
      className="w-full h-full"
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      logoPosition="bottom-right"
    >
      {locations.map((location) => (
        <Marker
          longitude={location.coordinates[1]}
          latitude={location.coordinates[0]}
          key={location.id}
        >
          <Link
            href={{
              pathname: "post",
              query: {
                parametro1: "banana",
                parametro2: "banaan2",
                random: "banaan2",
                qwerty: "banaan2",
                sporting: "campeão",
              },
            }}
            as="post"
            passHref
          >
            <img
              className="cursor-pointer"
              src="/images/Marker.png"
              alt="Marker map png"
            />
          </Link>
        </Marker>
      ))}
    </Map>
  );
}
