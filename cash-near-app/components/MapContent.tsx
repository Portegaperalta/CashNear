"use client"

import { APIProvider, Map } from "@vis.gl/react-google-maps"
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function MapContent() {
  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <APIProvider apiKey={googleMapsApiKey!}>
              <Map
                gestureHandling={'greedy'}
                defaultZoom={18}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                className="h-140 w-full"
              />
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