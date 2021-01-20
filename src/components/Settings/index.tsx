import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'components/GameContext';
import useLocalStorageState from 'components/hooks/useLocalStorage';
import styles from './settings.module.scss';

const Settings = () => {
  const history = useHistory();
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
    <div className={styles.settings}>
      <h1>Settings</h1>
      <div className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="turns">Turns</label>
          <input
            id="turns"
            name="turns"
            type="number"
            value={inputV}
            min="0"
            step="1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputV(e.currentTarget.value)
            }
            disabled={settings.easyMode}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="easy">Easy Mode</label>
          <input
            onChange={() => updateMode()}
            type="checkbox"
            id="easy"
            name="easy"
            checked={settings.easyMode}
          />
        </div>

        <button onClick={save}>Save</button>
        <button onClick={() => history.push('/')}>Back</button>
      </div>
      {validationError !== null ? <div>{validationError}</div> : ''}
    </div>
  );
};

export default Settings;
