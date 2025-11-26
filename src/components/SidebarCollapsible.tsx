// SidebarCollapsible — collapsible sidebar with simple toggle
// TODO: preserve collapsed state and surface wallet shortcuts
import React, { useState } from "react";

const SidebarCollapsible: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className={`p-3 ${open ? "w-48" : "w-12"}`}>
      <button onClick={() => setOpen((s) => !s)}>Toggle</button>
      <div>{open ? "Sidebar (open)" : "Mini"}</div>
    </aside>
  );
};

export default SidebarCollapsible;
