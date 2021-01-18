import React, { useContext, useEffect, useState } from 'react';
import useLocalStorageState from 'components/hooks/useLocalStorage';
import { GameContext } from 'components/GameContext';

const Settings = () => {
  const [state, setState] = useContext(GameContext);
  const [inputV, setInputV] = useState(state.turns);
  const [validationError, setValidationError] = useState(null);
  const { value, setValue } = useLocalStorageState('turns', '');

  useEffect(() => {
    setInputV(value);
  }, [value]);

  const save = () => {
    if (inputV < 10 || inputV % 1 !== 0) {
      return setValidationError(
        'You need to enter at least 20 turns and has to be an integer'
      );
    }
    setValue(inputV);
  };

  return (
    <>
      <div>
        <label htmlFor="turns">Turns</label>
        <input
          type="number"
          value={inputV}
          min="0"
          step="1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputV(e.currentTarget.value)
          }
        />
        <button onClick={save}>Save</button>
      </div>
      {validationError !== null ? <div>{validationError}</div> : ''}
    </>
  );
};

export default Settings;
