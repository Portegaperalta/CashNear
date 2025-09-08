export default async function getLatitude(): Promise<number | undefined> {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          resolve(location.coords.latitude)
        },
        (error) => {
          reject(error)
        }
      )
    } else {
      console.error("Error: geolocation in not supported by browser")
      resolve(undefined)
    }
  })
}