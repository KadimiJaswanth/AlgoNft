// BadgeActionable — badge that can be clicked to trigger actions
// TODO: connect callbacks for badge actions (client-only)
import React from "react";

const BadgeActionable: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => (
  <button onClick={onClick} className="px-2 py-1 bg-gray-100 rounded">{label}</button>
);

export default BadgeActionable;
