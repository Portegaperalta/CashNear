"use client"

import { APIProvider, Map } from "@vis.gl/react-google-maps"
import getLatitude from "@/utils/getLatitude"
import getLongitude from "@/utils/getLongitude"

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function MapContent() {
  const currentLat = getLatitude()
  const currentLong = getLongitude()

  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <APIProvider apiKey={googleMapsApiKey!}>
              <Map
                gestureHandling={'greedy'}
                zoom={18}
                defaultCenter={{ lat: 18.462416, lng: -69.936699 }}
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