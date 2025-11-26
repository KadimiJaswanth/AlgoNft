// ConfirmDialog.csx — confirm dialog placeholder (note: .csx in name preserved)
// TODO: wire confirm/cancel callbacks; keep client-only
import React from "react";

const ConfirmDialogCsx: React.FC<{ message?: string; onConfirm?: () => void }> = ({ message = "Confirm?", onConfirm }) => (
  <div className="p-3 border rounded">
    <div>{message}</div>
    <button onClick={onConfirm} className="mt-2 px-3 py-1 border rounded">Confirm</button>
  </div>
);

export default ConfirmDialogCsx;
