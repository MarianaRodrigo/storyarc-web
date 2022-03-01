/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Map, { Marker } from "react-map-gl";
import { useGetLocationsQuery } from "../services/storyarc";

export default function MapBoxMap() {
  const { data: locations, isFetching } = useGetLocationsQuery();

  if (isFetching) {
    return null;
  }

  return (
    <Map
      mapboxAccessToken={process.env.MAPBOX_KEY}
      initialViewState={{
        longitude: -8.65362,
        latitude: 40.6412,
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
              pathname: `/search/${location.name}`,
              query: {
                rua: location.name,
              },
            }}
            as={`/search/${location.name}`}
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
