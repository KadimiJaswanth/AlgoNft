// TableHeader — reusable table header cell
// TODO: add ARIA attributes and sorting icons as needed (client-only)
import React from "react";

const TableHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <th className="text-left py-2">{children}</th>
);

export default TableHeader;
