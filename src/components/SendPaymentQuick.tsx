// SendPaymentQuick — quick payment form for small transfers
// TODO: construct unsigned payment tx and forward to wallet signer (client-only)
import React from "react";

const SendPaymentQuick: React.FC = () => (
  <form className="p-2">
    <input placeholder="To address" className="border p-1 w-full mb-2" />
    <input placeholder="Amount" className="border p-1 w-full mb-2" />
    <button className="px-3 py-1 border rounded">Send</button>
  </form>
);

export default SendPaymentQuick;
