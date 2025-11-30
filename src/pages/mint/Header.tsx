import React from 'react';
import ConnectWalletButton from './ConnectWalletButton';
import ViewCollectionButton from './ViewCollectionButton';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">Mint Your NFT</h1>
        <p className="text-sm text-gray-300 mt-1">Secure, fast, and eco-friendly minting on Algorand Blockchain.</p>
      </div>
      <div className="flex gap-3">
        <ConnectWalletButton />
        <ViewCollectionButton />
      </div>
    </header>
  );
};

export default Header;
