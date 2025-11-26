// CopyToClipboard — simple copy button for text
// TODO: use navigator.clipboard API client-side and handle permissions
import React from "react";

const CopyToClipboard: React.FC<{ text?: string }> = ({ text = "" }) => (
  <button onClick={() => navigator.clipboard?.writeText(text)} className="px-2 py-1 border rounded">Copy</button>
);

export default CopyToClipboard;
