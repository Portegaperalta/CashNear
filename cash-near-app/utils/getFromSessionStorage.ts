export default function getFromSessionStorage(key: string) {
  try {
    const rawData = sessionStorage.getItem(key);
    const data = rawData ? JSON.parse(rawData) : null;
    return data;
  }
  catch (error) {
    console.error(`Error fetching data from session storage: ${error}`);
  }
}