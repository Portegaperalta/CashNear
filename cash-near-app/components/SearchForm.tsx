"use client"

import { useAutocompleteSuggestions } from "@/hooks/use-autocomplete-suggestions"
import React, { useState } from "react"

export default function SearchForm() {
  const [input, setInput] = useState<string>('');

  // use of the autocomplete-suggestions hook from visgl react-google-maps
  const { suggestions, isLoading, resetSession } = useAutocompleteSuggestions(input);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <div className="search-form">
      <div className="search-form-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="City,Zip code or Address"
          className={`py-2 px-2 outline-none w-full bg-white 
            ${input === '' ? `rounded-md` : `rounded-t-md`}`}
        />

      </div>
      <div className="search-form-results">
        <ul className={`suggestions-list py-2 px-2 w-full flex flex-col
         bg-white rounded-b-md ${input === '' ? `hidden` : `inline-block`}`}>
          {
            suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <li key={suggestion.placePrediction?.placeId}>
                  {suggestion.placePrediction?.text.text}
                </li>
              ))
            ) : (
              <li>
                No results
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}