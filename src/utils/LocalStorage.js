// utils/localStorage.js

/**
 * Save data to local storage
 * @param {string} key - The key under which the data will be stored
 * @param {any} data - The data to store
 */
export const saveDataToLocalStorage = (key, data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error("Failed to save data to local storage:", error);
    }
  };
  
  /**
   * Load data from local storage
   * @param {string} key - The key from which to retrieve the data
   * @returns {any} The retrieved data or null if not found
   */
  export const loadDataFromLocalStorage = (key) => {
    try {
      const jsonData = localStorage.getItem(key);
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.error("Failed to load data from local storage:", error);
      return null;
    }
  };
  


 
  