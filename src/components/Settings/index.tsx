import React, { useContext, useEffect, useState } from 'react';
import useLocalStorageState from 'components/hooks/useLocalStorage';
import { GameContext } from 'components/GameContext';

const Settings = () => {
  const [state, setState] = useContext(GameContext);
  const [inputV, setInputV] = useState(state.turns);
  const [validationError, setValidationError] = useState(null);

  const [settings, setSettings] = useLocalStorageState(
    'settings',
    `{"easyMode":false, "turns": ${state.turns}}`
  );

  useEffect(() => {
    setInputV(JSON.parse(settings).turns);
  }, [JSON.parse(settings).turns]);

  const save = () => {
    const parsedSettings = { ...JSON.parse(settings), turns: inputV };
    if (inputV < 10 || inputV % 1 !== 0) {
      return setValidationError(
        'You need to enter at least 20 turns and has to be an integer'
      );
    }
    setSettings(JSON.stringify(parsedSettings));
  };

  const updateMode = () => {
    let parsedSettings = {
      ...JSON.parse(settings),
      easyMode: !JSON.parse(settings).easyMode,
    };
    setSettings(JSON.stringify(parsedSettings));
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
          disabled={JSON.parse(settings).easyMode}
        />

        <input
          onChange={() => updateMode()}
          type="checkbox"
          id="easy"
          name="easy"
          checked={JSON.parse(settings).easyMode}
        />
        <label htmlFor="easy">Easy Mode</label>

        <button onClick={save}>Save</button>
      </div>
      {validationError !== null ? <div>{validationError}</div> : ''}
    </>
  );
};

export default Settings;
