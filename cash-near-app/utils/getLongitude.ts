export default async function getLongitude(): Promise<number | undefined> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          resolve(location.coords.longitude)
        },
        (error) => {
          reject(error)
        }
      )
    } else {
      console.error("Error: Geolocation is not supported by browser")
      resolve(undefined)
    }
  })
}