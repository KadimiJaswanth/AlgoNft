// WalletBalanceMini — small wallet balance display
// TODO: read balances from wallet provider or indexer (client-only)
import React from "react";

const WalletBalanceMini: React.FC<{ balance?: number }> = ({ balance = 0 }) => (
  <div className="text-sm">{balance} ALGO</div>
);

export default WalletBalanceMini;
