// TableCell — reusable table cell
// TODO: support truncation and copy-on-click (client-only)
import React from "react";

const TableCell: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <td className="py-2">{children}</td>
);

export default TableCell;
