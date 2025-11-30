import React from 'react';
import UploadField from './UploadField';
import AttributeRow from './AttributeRow';
import RoyaltyInput from './RoyaltyInput';
import SupplyInput from './SupplyInput';

const MintOptionsForm: React.FC = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6">
      <h3 className="text-xl font-semibold">Minting Options</h3>
      <div className="mt-4 space-y-4">
        <UploadField />
        <input className="w-full p-3 rounded bg-[rgba(0,0,0,0.4)]" placeholder="NFT Name" />
        <textarea className="w-full p-3 rounded bg-[rgba(0,0,0,0.4)]" placeholder="Description" />
        <div>
          <div className="text-sm text-gray-300">Attributes</div>
          <div className="space-y-2 mt-2">
            <AttributeRow />
            <AttributeRow />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <RoyaltyInput />
          <SupplyInput />
        </div>
        <div className="text-sm text-gray-300">Estimated mint cost: <strong>Algorand fee: ~0.001 Algo</strong></div>
      </div>
    </div>
  );
};

export default MintOptionsForm;
