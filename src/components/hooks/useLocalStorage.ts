import React, { useEffect, useState } from 'react';

const useLocalStorageState = (key, defaultValue = null) => {
  const [value, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};

export default useLocalStorageState;
