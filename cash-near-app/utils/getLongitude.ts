export default async function getLongitude(): Promise<number | undefined> {
  if (!("geolocation" in navigator)) {
    console.error("Error: geolocation is not supported by browser")
  } else {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (location) => resolve(location.coords.longitude),
        (error) => reject(error)
      )
    })
  }
}