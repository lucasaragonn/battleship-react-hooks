import React from 'react';

interface PanelProps {
  settings: { easyMode: boolean; turns: number };
  ships: number;
}

const Panel = ({ settings, ships }: PanelProps) => {
  const { easyMode, turns } = settings;
  return (
    <div>
      {easyMode ? <h1>Easy Mode</h1> : <h1>{turns}</h1>}
      <h3>Ships remaining: {ships}</h3>
    </div>
  );
};

export default Panel;
