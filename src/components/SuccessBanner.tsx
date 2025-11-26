// SuccessBanner — inline success banner
// TODO: integrate with app notifications (client-only)
import React from "react";

const SuccessBanner: React.FC<{ message?: string }> = ({ message = "Success" }) => (
  <div className="p-2 bg-green-100 text-green-700 border">{message}</div>
);

export default SuccessBanner;
