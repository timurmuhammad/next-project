export function getLocalStorage(key: string) {
  if (typeof window === 'undefined') {
    return null; // Возврат `null` на сервере
  }

  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error parsing localStorage item "${key}":`, error);
    return null;
  }
}