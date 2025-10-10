"use client"

import { useEffect, useState } from "react"
import { Map } from "@vis.gl/react-google-maps"
import AutocompleteResult from "./react-google-maps/AutocompleteResult"

const googleMapID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

type MapContentProps = {
  googleMapsApiKey: string,
  selectedPlace: google.maps.places.Place | null,
}

export type AutocompleteMode = { id: string; label: string };

export default function MapContent({ googleMapsApiKey, selectedPlace }: MapContentProps) {
  const [selectedPlaceLat, setSelectedPlaceLat] = useState<number | undefined>(0);
  const [selectedPlaceLng, setSelectedPlaceLng] = useState<number | undefined>(0);

  // updates latitude and longitude states each time 
  //selectedPlace Prop changes
  useEffect(() => {
    if (selectedPlace != null) {
      setSelectedPlaceLat(selectedPlace.location?.lat());
      setSelectedPlaceLng(selectedPlace.location?.lng());
    }
  }, [selectedPlace])

  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <Map
              mapId={googleMapID}
              gestureHandling={'greedy'}
              defaultZoom={18}
              center={(selectedPlaceLat && selectedPlaceLng) ?
                { lat: selectedPlaceLat, lng: selectedPlaceLng } :
                { lat: 18.465563, lng: -69.930286 }}
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