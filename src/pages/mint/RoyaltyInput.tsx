import React from 'react';

const RoyaltyInput: React.FC = () => {
  return (
    <label className="flex flex-col">
      <div className="text-sm text-gray-300">Royalty %</div>
      <input type="number" min={0} max={100} defaultValue={5} className="p-2 rounded bg-[rgba(0,0,0,0.4)]" />
    </label>
  );
};

export default RoyaltyInput;
