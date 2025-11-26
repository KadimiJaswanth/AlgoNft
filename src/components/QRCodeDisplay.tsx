// QRCodeDisplay — placeholder for showing QR codes
// TODO: integrate a QR generator lib client-side; do not embed secrets
import React from "react";

const QRCodeDisplay: React.FC<{ data?: string }> = ({ data = "" }) => <div className="p-3">QR: {data}</div>;

export default QRCodeDisplay;
