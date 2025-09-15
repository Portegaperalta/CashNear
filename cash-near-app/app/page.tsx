"use client"

import { useState } from "react";
import MapContent from "@/components/MapContent";
import Header from "@/components/Header";

export type AutocompleteMode = { id: string; label: string };

const implementations: Array<AutocompleteMode> = [
  { id: 'custom', label: 'Minimal Custom Build' },
];

export default function Home() {
  // visgl google maps autocomplete state mangement
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Place | null>(null);
  const [selectedImplementation, setSelectedImplementation] = useState<AutocompleteMode>(implementations[0]);

  return (
    <div className="body-content">
      <Header
        selectedImplementation={selectedImplementation}
        selectedPlace={selectedPlace}
      />
      <main className="px-4 py-4">
        <section className="map">
          <MapContent selectedPlace={selectedPlace} />
        </section>
      </main>
    </div>
  );
}
