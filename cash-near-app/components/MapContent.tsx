"use client"

import { APIProvider, Map } from "@vis.gl/react-google-maps"
import getLatitude from "@/utils/getLatitude"
import getLongitude from "@/utils/getLongitude"
import { useEffect, useState } from "react"

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function MapContent() {
  const [currentLat, setCurrentLat] = useState<number | undefined>()
  const [currentLong, setCurrentLong] = useState<number | undefined>()

  const assignLat = async () => {
    try {
      const lat = await getLatitude()
      setCurrentLat(lat)
    } catch (error) {
      console.error(`Error getting latitude: ${error}`)
    }
  }

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
            <APIProvider apiKey={googleMapsApiKey!}>
              <Map
                gestureHandling={'greedy'}
                zoom={18}
                center={(currentLat && currentLong) ? { lat: currentLat, lng: currentLong } : { lat: 25.761663, lng: -80.191846 }}
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