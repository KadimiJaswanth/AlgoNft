// TxFilterBar — filters for transaction lists
// TODO: wire to transaction query hooks (client-side only)
import React from "react";

const TxFilterBar: React.FC = () => (
  <div className="flex gap-2 p-2">
    <input placeholder="Address or txid" className="border p-1" />
  </div>
);

export default TxFilterBar;
