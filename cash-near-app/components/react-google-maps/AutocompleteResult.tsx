"use client"

import { AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import React, { useEffect } from 'react';

interface Props {
  place: google.maps.places.Place | null;
}

const AutocompleteResult = ({ place }: Props) => {
  const map = useMap();

  // adjust the viewport of the map when the place is changed
  useEffect(() => {
    if (!map || !place) return;
    if (place.viewport) map.fitBounds(place.viewport);
  }, [map, place]);

  if (!place) return null;

  // add a marker for the selected place
  return (
    <AdvancedMarker position={place.location}>
      <Pin
        background={'#00B549'}
        borderColor={'#FFFFFF'}
        glyphColor={'#FFFFFF'}
      />
    </AdvancedMarker>
  );
};

export default React.memo(AutocompleteResult);