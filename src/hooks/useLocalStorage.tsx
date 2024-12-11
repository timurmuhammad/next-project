

import { useState } from "react";

export function useLocalStorage<T>(key: string, startValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return startValue; // Возвращаем начальное значение на сервере
    }

    const data = localStorage.getItem(key);
    if (data === null) {
      return startValue;
    }

    try {
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error parsing localStorage item "${key}":`, error);
      localStorage.removeItem(key); // Удаляем некорректные данные
      return startValue;
    }
  });

  const save = (newValue: T) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    setValue(newValue);
  };

  return [value, save] as const;
}