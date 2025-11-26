// AccessibleSkipLink — skip-to-content link for keyboard users
// TODO: ensure the target id exists on pages (client-only)
import React from "react";

const AccessibleSkipLink: React.FC = () => (
  <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
);

export default AccessibleSkipLink;
