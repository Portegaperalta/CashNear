"use client"

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
import { APIProvider, Map } from "@vis.gl/react-google-maps"

export default function MapContent() {
  return (
    <div className="map">
      <div className="map-content">
        {
          googleMapsApiKey ? (
            <APIProvider apiKey={googleMapsApiKey!}>
              <Map
                style={{ width: '100vw', height: '100vh' }}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
                defaultZoom={3}
                center={{ lat: 22.54992, lng: 0 }}
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