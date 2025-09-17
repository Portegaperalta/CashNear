"use client"

import { useState } from "react"
import { APIProvider, Map, ControlPosition } from "@vis.gl/react-google-maps"
import AutocompleteControl from "./react-google-maps/AutocompleteControl"
import AutocompleteResult from "./react-google-maps/AutocompleteResult"

const googleMapID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID

type MapContentProps = {
  googleMapsApiKey: string
}

export type AutocompleteMode = { id: string; label: string };

const implementations: Array<AutocompleteMode> = [
  { id: 'custom', label: 'Minimal Custom Build' },
];

export default function MapContent({ googleMapsApiKey }: MapContentProps) {
  // visgl google maps autocomplete state mangement
  // visgl google maps autocomplete state mangement
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Place | null>(null);
  const [selectedImplementation, setSelectedImplementation] = useState<AutocompleteMode>(implementations[0]);

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

  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <APIProvider apiKey={googleMapsApiKey} version="beta">
              <Map
                mapId={googleMapID}
                gestureHandling={'greedy'}
                defaultZoom={12}
                defaultCenter={{ lat: 18.468932, lng: -69.939631 }}
                className="h-140 w-full"
              >
                <AutocompleteControl
                  controlPosition={ControlPosition.TOP_CENTER}
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