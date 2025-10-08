"use client"

import { APIProvider } from "@vis.gl/react-google-maps";
import Header from "@/components/Header";
import MapContent from "@/components/MapContent";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function Home() {
  const [selectedPlaceID, setSelectedPlaceID] = useState<string | null>('');

  const updatePlaceID = (placeID: string | null) => {
    setSelectedPlaceID(placeID);
  }

  useEffect(() => {
    console.log(selectedPlaceID);
  }, [selectedPlaceID])

  return (
    <div className="content">
      <APIProvider apiKey={googleMapsApiKey!}>
        <Header onSearchFormSubmit={updatePlaceID} />
        <main className="px-4 py-4">
          <section className="map">
            <MapContent
              googleMapsApiKey={googleMapsApiKey!}
              placeID={selectedPlaceID}
            />
          </section>
        </main>
        <Footer />
      </APIProvider>
    </div>
  );
}
