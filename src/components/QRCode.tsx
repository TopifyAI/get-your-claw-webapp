"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRCodeProps {
  url: string;
  size?: number;
}

export default function QRCode({ url, size = 160 }: QRCodeProps) {
  return (
    <div className="inline-flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white p-4">
      <QRCodeSVG value={url} size={size} level="M" />
      <span className="text-xs text-gray-600">Scan to try</span>
    </div>
  );
}
