"use client"

import { useEffect, useState } from "react"
import { APIProvider, Map, ControlPosition } from "@vis.gl/react-google-maps"
import getLatitude from "@/utils/getLatitude"
import getLongitude from "@/utils/getLongitude"
import AutocompleteControl from "./react-google-maps/AutocompleteControl"
import AutocompleteResult from "./react-google-maps/AutocompleteResult"

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const googleMapID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

export type AutocompleteMode = { id: string; label: string };

const implementations: Array<AutocompleteMode> = [
  { id: 'custom', label: 'Minimal Custom Build' },
];

export default function MapContent() {
  // visgl google maps autocomplete state mangement
  const [selectedImplementation, setSelectedImplementation] = useState<AutocompleteMode>(implementations[0]);

  //current latitude and longitude state management
  const [currentLat, setCurrentLat] = useState<number | undefined>();
  const [currentLong, setCurrentLong] = useState<number | undefined>();

  const incompatibleVersionLoaded = Boolean(
    globalThis &&
    globalThis.google?.maps?.version &&
    !(
      globalThis.google?.maps?.version.endsWith('-alpha') ||
      globalThis.google?.maps?.version.endsWith('-beta')
    )
  );

  if (incompatibleVersionLoaded) {
    location.reload();
    return;
  }

  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Place | null>(null);

  // currnet latitude state setter
  const assignLat = async () => {
    try {
      const lat = await getLatitude()
      setCurrentLat(lat)
    } catch (error) {
      console.error(`Error getting latitude: ${error}`)
    }
  }

  // currnet longitude state setter
  const assignLong = async () => {
    try {
      const long = await getLongitude()
      setCurrentLong(long)
    } catch (error) {
      console.error(`Error getting longitude: ${error}`)
    }
  }

  useEffect(() => {
    const getCurrentLocation = async () => {
      await assignLat()
      await assignLong()
    }
    getCurrentLocation()
  }, [])

  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <APIProvider apiKey={googleMapsApiKey!} version="beta">
              <Map
                mapId={googleMapID}
                gestureHandling={'greedy'}
                zoom={18}
                defaultCenter={{ lat: 25.761663, lng: -80.191846 }}
                className="h-140 w-full"
              >
                <AutocompleteControl
                  controlPosition={ControlPosition.TOP_LEFT}
                  selectedImplementation={selectedImplementation}
                  onPlaceSelect={setSelectedPlace}
                />

                <AutocompleteResult place={selectedPlace} />
              </Map>
            </APIProvider>
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