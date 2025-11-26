// SendPaymentConfirm — payment confirmation UI
// TODO: display unsigned tx summary and call wallet to sign/submit (client-only)
import React from "react";

const SendPaymentConfirm: React.FC<{ amount?: number; to?: string }> = ({ amount, to }) => (
  <div className="p-3">Confirm sending {amount ?? 0} ALGO to {to ?? "addr..."}</div>
);

export default SendPaymentConfirm;
