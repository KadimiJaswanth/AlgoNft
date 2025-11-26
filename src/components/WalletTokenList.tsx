// WalletTokenList — list tokens held by wallet
// TODO: populate from wallet or indexer; keep logic client-side
import React from "react";

const WalletTokenList: React.FC<{ tokens?: Array<{ name: string; amount: number }> }> = ({ tokens = [] }) => (
  <ul>
    {tokens.map((t) => (
      <li key={t.name}>{t.name}: {t.amount}</li>
    ))}
  </ul>
);

export default WalletTokenList;
