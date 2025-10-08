"use client"

import { useState } from "react"
import { Map } from "@vis.gl/react-google-maps"
import AutocompleteResult from "./react-google-maps/AutocompleteResult"

const googleMapID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

type MapContentProps = {
  googleMapsApiKey: string,
  selectedPlace: google.maps.places.Place | null,
}

export type AutocompleteMode = { id: string; label: string };

export default function MapContent({ googleMapsApiKey, selectedPlace }: MapContentProps) {

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