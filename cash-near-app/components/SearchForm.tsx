"use client"

import { Search } from "lucide-react"
import { ControlPosition } from "@vis.gl/react-google-maps"
import AutocompleteControl from "./react-google-maps/AutocompleteControl"

type SearchFormProps = {
  selectedPlace: any,
  selectedImplementation: any,
}

export default function SearchForm({ selectedPlace, selectedImplementation }: SearchFormProps) {

  return (
    <div className="search-form">
      <AutocompleteControl
        controlPosition={ControlPosition.BOTTOM_CENTER}
        selectedImplementation={selectedImplementation}
        onPlaceSelect={selectedPlace}
      />
    </div>
  )
}