import React from 'react';

const ProgressBar: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  return (
    <div className="w-full bg-[rgba(255,255,255,0.03)] h-3 rounded overflow-hidden">
      <div className="bg-gradient-to-r from-[#ff7bd6] to-[#4dd0e1] h-3" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
