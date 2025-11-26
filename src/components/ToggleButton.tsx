// ToggleButton — single toggle button
// TODO: use for theme or quick settings (client-only)
import React from "react";

const ToggleButton: React.FC<{ on?: boolean; onClick?: () => void }> = ({ on = false, onClick }) => (
  <button onClick={onClick} className={`px-2 py-1 rounded ${on ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}> {on ? 'On' : 'Off'}</button>
);

export default ToggleButton;
