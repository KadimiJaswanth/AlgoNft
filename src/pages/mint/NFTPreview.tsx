import React from 'react';
import RarityBar from './RarityBar';
import TraitSummary from './TraitSummary';

const NFTPreview: React.FC = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-6 backdrop-blur border border-[rgba(255,255,255,0.06)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-[#0ff] to-[#a0f] rounded-xl shimmer-border flex items-center justify-center">
            <img src="/public/placeholder.svg" alt="placeholder" className="w-56 h-56 object-cover rounded-lg" />
          </div>
        </div>
        <div className="col-span-2 space-y-3">
          <h2 className="text-2xl font-bold">Amazing NFT #001</h2>
          <RarityBar level={75} />
          <TraitSummary />
        </div>
      </div>
    </div>
  );
};

export default NFTPreview;
