import React from 'react';
import styles from './panel.module.scss';

interface PanelProps {
  settings: { easyMode: boolean; turns: number };
  ships: number;
}

const Panel = ({ settings, ships }: PanelProps) => {
  const { easyMode, turns } = settings;
  return (
    <div className={styles.panel}>
      {easyMode ? <h1>Easy Mode</h1> : <h1>{turns}</h1>}
      <h3>Ships remaining: {ships}</h3>
    </div>
  );
};

export default Panel;
