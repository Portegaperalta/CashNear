export default async function getPlaceFromId(placeId: string) {
  const { Place } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;

  const place = new Place({ id: placeId });

  //fetches needed fields
  await place.fetchFields({
    fields: ['displayName', 'formattedAddress', 'location', 'rating']
  });

  return place;
}