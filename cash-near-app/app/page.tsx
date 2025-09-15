"use client"

import { useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapContent from "@/components/MapContent";
import Header from "@/components/Header";

export type AutocompleteMode = { id: string; label: string };

const implementations: Array<AutocompleteMode> = [
  { id: 'custom', label: 'Minimal Custom Build' },
];

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
