import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorageState from 'components/hooks/useLocalStorage';
import { GameContext } from 'components/GameContext';

const Settings = () => {
  const [state, setState] = useContext(GameContext);
  const [inputV, setInputV] = useState(state.settings.turns);
  const [validationError, setValidationError] = useState(null);

  const [settings, setSettings] = useLocalStorageState(
    'settings',
    state.settings
  );

  useEffect(() => {
    setInputV(settings.turns);
  }, [settings.turns]);

  const save = () => {
    if (inputV < 10 || inputV % 1 !== 0) {
      return setValidationError(
        'You need to enter at least 20 turns and has to be an integer'
      );
    }
    setSettings({ ...settings, turns: inputV });
  };

  const updateMode = () => {
    setSettings({
      ...settings,
      easyMode: !settings.easyMode,
    });
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
          disabled={settings.easyMode}
        />

        <input
          onChange={() => updateMode()}
          type="checkbox"
          id="easy"
          name="easy"
          checked={settings.easyMode}
        />
        <label htmlFor="easy">Easy Mode</label>

        <button onClick={save}>Save</button>
      </div>

      <div>
        <Link to={'/'}>Back</Link>
      </div>
      {validationError !== null ? <div>{validationError}</div> : ''}
    </>
  );
};

export default Settings;
