// GallerySortSelect — select control for sorting gallery items
// TODO: integrate with gallery data sorting (client-side only)
import React from "react";

const GallerySortSelect: React.FC = () => (
  <select className="border p-1">
    <option>Newest</option>
    <option>Oldest</option>
    <option>Most Expensive</option>
  </select>
);

export default GallerySortSelect;
