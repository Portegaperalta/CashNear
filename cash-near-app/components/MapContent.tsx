"use client"

import { useEffect, useState } from "react"
import { Map } from "@vis.gl/react-google-maps"
import AutocompleteResult from "./react-google-maps/AutocompleteResult"
import getPlaceFromId from "@/utils/getPlaceFromId"

const googleMapID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

type MapContentProps = {
  googleMapsApiKey: string,
  placeID: string | null,
}

export type AutocompleteMode = { id: string; label: string };

export default function MapContent({ googleMapsApiKey, placeID }: MapContentProps) {

  // visgl google maps autocomplete result state mangement
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Place | null>(null);

  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <Map
              mapId={googleMapID}
              gestureHandling={'greedy'}
              defaultZoom={12}
              defaultCenter={{ lat: 18.468932, lng: -69.939631 }}
              className="h-140 w-full"
            >
              <AutocompleteResult place={selectedPlace} />
            </Map>
          ) : (
            <div className="">
              <p>Loading map....</p>
            </div>
          )
        }
      </div>
    </div>
  )
}