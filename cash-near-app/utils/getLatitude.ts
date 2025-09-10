export default async function getLatitude(): Promise<number | undefined> {
  if (!("geolocation" in navigator)) {
    console.error("Error: geolocation is not supported by browser")
    return undefined
  } else {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (location) => resolve(location.coords.latitude),
        (error) => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      )
    })
  }
}