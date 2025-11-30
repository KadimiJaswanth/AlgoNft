import React from 'react';

const BlockAnimation: React.FC = () => {
  return (
    <div className="w-full h-16 bg-[rgba(255,255,255,0.01)] rounded flex items-center gap-2 p-2 overflow-hidden">
      <div className="animate-slide w-10 h-8 bg-[#0ff] rounded" />
      <div className="animate-slide delay-100 w-10 h-8 bg-[#7df] rounded" />
      <div className="animate-slide delay-200 w-10 h-8 bg-[#a0f] rounded" />
    </div>
  );
};

export default BlockAnimation;
