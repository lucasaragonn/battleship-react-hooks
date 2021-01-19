import React, { useEffect, useState } from 'react';
// TODO: BORRAR EL HOOK Y USAR LOCALSTORAGE DIRECTO
const useLocalStorageState = (key, defaultValue = '') => {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue] as const;
};

export default useLocalStorageState;
