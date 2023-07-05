import { useState, useEffect } from 'react';
import localforage from 'localforage';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Load data from local storage
    const loadFromLocalStorage = async () => {
      try {
        const data = await localforage.getItem(key);
        setValue(data || initialValue);
      } catch (error) {
        console.error(`Error loading ${key} from local storage:`, error);
      }
    };

    loadFromLocalStorage();
  }, [key, initialValue]);

  // Save data to local storage
  const saveToLocalStorage = async (newValue) => {
    try {
      await localforage.setItem(key, newValue);
      setValue(newValue);
    } catch (error) {
      console.error(`Error saving ${key} to local storage:`, error);
    }
  };

  return [value, saveToLocalStorage];
};
