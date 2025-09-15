"use client"

import React from 'react';
import { ControlPosition, MapControl } from '@vis.gl/react-google-maps';

import { AutocompleteCustom } from './AutocompleteCustom';
import type { AutocompleteMode } from '../MapContent';

type CustomAutocompleteControlProps = {
  controlPosition: ControlPosition;
  selectedImplementation: AutocompleteMode;
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
};

const AutocompleteControl = ({
  controlPosition,
  selectedImplementation,
  onPlaceSelect
}: CustomAutocompleteControlProps) => {
  const { id } = selectedImplementation;

  return (
    <MapControl position={controlPosition}>
      <div className="autocomplete-control py-2 px-4 bg-white">
        {id === 'custom' && (
          <AutocompleteCustom onPlaceSelect={onPlaceSelect} />
        )}
      </div>
    </MapControl>
  );
};

export default React.memo(AutocompleteControl)