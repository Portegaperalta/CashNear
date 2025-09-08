export default function getLongitude() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((location) => {
      const longitude = location.coords.longitude
      return longitude
    })
  } else {
    console.error("Error: Geolocation is not supported by browser")
  }
}