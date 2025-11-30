import React from 'react';
import NeonButton from './NeonButton';
import ProgressBar from './ProgressBar';
import MintSuccess from './MintSuccess';

const MintButtonSection: React.FC = () => {
  return (
    <div className="mt-4 bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl">
      <NeonButton>Mint Now</NeonButton>
      <div className="mt-4">
        <ProgressBar progress={0} />
        <div className="text-sm text-gray-300 mt-2">Minting on Algorand, please wait...</div>
        <MintSuccess />
      </div>
    </div>
  );
};

export default MintButtonSection;
