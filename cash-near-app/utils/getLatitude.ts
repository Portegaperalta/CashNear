export default function getLatitude() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((location) => {
      const latitude = location.coords.latitude
      return latitude
    })
  } else {
    console.error("Error: Geolocation is not supported by browser")
  }
}