import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from 'components/GameContext';
import useLocalStorageState from 'components/hooks/useLocalStorage';
import styles from './settings.module.scss';

const Settings = () => {
  const history = useHistory();
  const [state] = useContext(GameContext);
  const [inputV, setInputV] = useState<number>(state.settings.turns);
  const [msg, setMsg] = useState<string>('');

  const [settings, setSettings] = useLocalStorageState(
    'settings',
    state.settings
  );

  useEffect(() => {
    setInputV(settings.turns);
  }, [settings.turns]);

  const save = () => {
    if (inputV < 20 || inputV % 1 !== 0) {
      return setMsg(
        'You need to enter at least 20 turns and has to be an integer'
      );
    }
    setSettings({ ...settings, turns: inputV });
    setMsg('Saved!');
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
              setInputV(Number(e.currentTarget.value))
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
      {msg !== null ? <div className={styles.message}>{msg}</div> : ''}
    </div>
  );
};

export default Settings;
