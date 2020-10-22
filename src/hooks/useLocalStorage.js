import { useState, useEffect } from "react";

// used to avoid scope pollution in local storage
const PREFIX = "codepen-clone-";

const useLocalStorage = (key, initValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const json = localStorage.getItem(prefixedKey);

    if (json != null) return JSON.parse(json);

    if (typeof initValue === "function") {
      return initValue();
    } else {
      return initValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
