import React from 'react';

const RarityBar: React.FC<{ level?: number }> = ({ level = 50 }) => {
  return (
    <div>
      <div className="text-sm text-gray-300">Rarity</div>
      <div className="w-full bg-[rgba(255,255,255,0.06)] rounded-full h-3 mt-1">
        <div className="bg-gradient-to-r from-[#ff7bd6] to-[#4dd0e1] h-3 rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
};

export default RarityBar;
