// GalleryEmptyState — friendly empty state for gallery views
// TODO: provide CTA to mint or import collection (client-only)
import React from "react";

const GalleryEmptyState: React.FC<{ message?: string }> = ({ message = "No items found" }) => (
  <div className="p-8 text-center text-gray-500">{message}</div>
);

export default GalleryEmptyState;
