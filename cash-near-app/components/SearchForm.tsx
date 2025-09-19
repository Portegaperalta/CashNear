"use client"

import { useAutocompleteSuggestions } from "@/hooks/use-autocomplete-suggestions"
import React, { useState } from "react"
import { X } from "lucide-react";

export default function SearchForm() {
  const [input, setInput] = useState<string>('');

  // use of the autocomplete-suggestions hook from visgl react-google-maps
  const { suggestions, isLoading } = useAutocompleteSuggestions(input);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSuggestionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setInput(e.currentTarget.textContent)
  }

  const handleInputClear = () => {
    setInput('');
  }

  return (
    <div className="search-form">
      <div
        className={`search-form-input py-2 px-2 flex w-full 
      bg-white ${input === '' ? `rounded-md ` : `rounded-t-md`}`}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="City,Zip code or Address"
          className={`px-2 outline-none w-full`}
        />
        <button
          type="button"
          onClick={handleInputClear}
          className={`clear-input-button cursor-pointer
          ${input ? `inline-block` : `hidden`}`}
        >
          <X />
        </button>
      </div>
      <div className="search-form-results">
        <ul className={`suggestions-list py-2 px-2 w-full flex flex-col
         bg-white rounded-b-md ${input === '' ? `hidden` : `inline-block`}`}>
          {
            suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <li
                  key={suggestion.placePrediction?.placeId}
                  onClick={handleSuggestionClick}
                  className="px-2 cursor-pointer hover:bg-(--clr-gray-hover)"
                >
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