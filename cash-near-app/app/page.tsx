"use client"

import { useEffect, useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import getPlaceFromId from "@/utils/getPlaceFromId"
import Header from "@/components/Header";
import MapContent from "@/components/MapContent";
import Footer from "@/components/Footer";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function Home() {
  const [selectedPlaceID, setSelectedPlaceID] = useState<string | null>('');
  const [place, setPlace] = useState<google.maps.places.Place | null>();

  const updatePlaceID = (placeID: string | null) => {
    setSelectedPlaceID(placeID);
  }

  const fetchSelectedPlace = async (placeID: string | null) => {
    const fetchedPlace = await getPlaceFromId(placeID);
    setPlace(fetchedPlace);
  }

  useEffect(() => {
    fetchSelectedPlace(selectedPlaceID);
  }, [selectedPlaceID])

  return (
    <div className="content">
      <APIProvider apiKey={googleMapsApiKey!}>
        <Header onSearchFormSubmit={updatePlaceID} />
        <main className="px-4 py-4">
          <section className="map">
            <MapContent
              googleMapsApiKey={googleMapsApiKey!}
              selectedPlace={place}
            />
          </section>
        </main>
        <Footer />
      </APIProvider>
    </div>
  );
}
