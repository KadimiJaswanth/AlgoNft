// CollectionCard — small card representing a collection
// TODO: link to collection page and show sample items (client-side only)
import React from "react";

const CollectionCard: React.FC<{ name?: string }> = ({ name = "My Collection" }) => (
  <div className="p-2 border rounded">{name}</div>
);

export default CollectionCard;
