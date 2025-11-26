// WalletTokenBadge — small badge showing a single token balance
// TODO: read token balance from indexer or wallet provider (client-side only)
import React from "react";

const WalletTokenBadge: React.FC<{ tokenName?: string; amount?: number }> = ({ tokenName = "ALGO", amount = 0 }) => (
  <span className="px-2 py-1 bg-gray-100 rounded">{tokenName}: {amount}</span>
);

export default WalletTokenBadge;
