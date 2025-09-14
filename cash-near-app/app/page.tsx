"use client"

import MapContent from "@/components/MapContent";
import Header from "@/components/Header";
import { APIProvider } from "@vis.gl/react-google-maps";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export default function Home() {
  return (
    <div className="body-content">
      <Header />
      <main className="px-4 py-4">
        <section className="map">
          <MapContent />
        </section>
      </main>
    </div>
  );
}
