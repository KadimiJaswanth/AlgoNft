// ErrorBanner — inline error banner
// TODO: wire to error boundary or toast system (client-only)
import React from "react";

const ErrorBanner: React.FC<{ message?: string }> = ({ message = "An error occurred" }) => (
  <div className="p-2 bg-red-100 text-red-700 border">{message}</div>
);

export default ErrorBanner;
