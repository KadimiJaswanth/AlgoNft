/**
 * Hook for managing localStorage
 */

import { useState, useEffect, useCallback } from 'react';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '@/utils/storage';

/**
 * Hook to manage localStorage with React state
 */
export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): [T | null, (value: T) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const item = getLocalStorageItem<T>(key);
      return item ?? (initialValue ?? null);
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return initialValue ?? null;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        setLocalStorageItem(key, value);
      } catch (error) {
        console.error(`Error writing to localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  const removeValue = useCallback(() => {
    try {
      setStoredValue(null);
      removeLocalStorageItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue, removeValue];
};
