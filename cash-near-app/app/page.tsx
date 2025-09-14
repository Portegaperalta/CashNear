"use client"

import { useState } from "react";
import { APIProvider, ControlPosition } from "@vis.gl/react-google-maps";
import AutocompleteControl from "@/components/react-google-maps/AutocompleteControl";
import AutocompleteResult from "@/components/react-google-maps/AutocompleteResult";
import MapContent from "@/components/MapContent";
import Header from "@/components/Header";

export type AutocompleteMode = { id: string; label: string };

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const implementations: Array<AutocompleteMode> = [
  { id: 'custom', label: 'Minimal Custom Build' },
];

export default function Home() {
  // visgl google maps autocomplete state mangement
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Place | null>(null);
  const [selectedImplementation, setSelectedImplementation] = useState<AutocompleteMode>(implementations[0]);

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
