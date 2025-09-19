export default function saveToSessionStorage(key: string, value: any) {
  sessionStorage.setItem(key, JSON.stringify(value));
}