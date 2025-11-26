// PaginationDots — simple dots for pagination state
// TODO: add keyboard navigation and ARIA attributes (client-only)
import React from "react";

const PaginationDots: React.FC<{ pages?: number; current?: number }> = ({ pages = 3, current = 0 }) => (
  <div className="flex gap-2">
    {Array.from({ length: pages }).map((_, i) => (
      <span key={i} className={i === current ? 'w-3 h-3 bg-black rounded-full' : 'w-3 h-3 bg-gray-300 rounded-full'} />
    ))}
  </div>
);

export default PaginationDots;
