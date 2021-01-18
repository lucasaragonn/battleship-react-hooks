import React, { useEffect, useState } from 'react';

const useLocalStorageState = (key, defaultValue = '') => {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return { value, setValue };
};

export default useLocalStorageState;
