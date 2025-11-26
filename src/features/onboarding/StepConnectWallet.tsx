// StepConnectWallet — UI step to connect a wallet
// TODO: call AlgoSigner/MyAlgoConnect connect methods from UI (client-only)
import React from "react";

const StepConnectWallet: React.FC = () => (
  <div className="p-4">
    <div>Connect your wallet</div>
    <button className="mt-2 px-3 py-1 border rounded">Connect</button>
  </div>
);

export default StepConnectWallet;
