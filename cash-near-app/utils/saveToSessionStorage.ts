export default function saveToSessionStorage(key: string, value: string) {
  sessionStorage.setItem(key, JSON.stringify(value));
}