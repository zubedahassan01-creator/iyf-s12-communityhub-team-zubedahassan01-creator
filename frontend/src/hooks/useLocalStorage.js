import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved === null ? initialValue : JSON.parse(saved);
    } catch { return initialValue; }
  });

  const updateValue = (nextValue) => {
    setValue((current) => {
      const resolved = typeof nextValue === 'function' ? nextValue(current) : nextValue;
      try { window.localStorage.setItem(key, JSON.stringify(resolved)); } catch { /* Storage may be unavailable. */ }
      return resolved;
    });
  };

  return [value, updateValue];
}
