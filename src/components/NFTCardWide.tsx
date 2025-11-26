// NFTCardWide — wide-format NFT card for lists
// TODO: include quick actions (transfer, view) that call wallet signers only
import React from "react";

const NFTCardWide: React.FC<{ title?: string }> = ({ title = "NFT" }) => (
  <div className="p-2 border rounded">NFTCardWide: {title}</div>
);

export default NFTCardWide;
