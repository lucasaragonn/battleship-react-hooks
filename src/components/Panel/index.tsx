import React from 'react';

interface PanelProps {
  turns: number;
  ships: number;
}

const Panel = ({ turns, ships }: PanelProps) => {
  return (
    <div>
      <h1>{turns}</h1>
      <h3>Ships remaining: {ships}</h3>
    </div>
  );
};

export default Panel;
