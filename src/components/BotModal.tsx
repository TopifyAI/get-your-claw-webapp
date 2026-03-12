"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import type { Bot } from "@/data/bots";

interface BotModalProps {
  bot: Bot;
  onClose: () => void;
}

export default function BotModal({ bot, onClose }: BotModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md border border-[#222] bg-[#0a0a0a] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#555] transition hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg text-white">{bot.name}</h2>
          <p className="mt-1 text-xs text-[#888]">{bot.tagline}</p>
        </div>

        {/* Description */}
        <p className="mb-8 text-xs leading-relaxed text-[#666]">{bot.description}</p>

        {/* QR Code */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-lg bg-white p-4">
            <QRCodeSVG
              value={bot.telegramUrl}
              size={180}
              level="M"
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
        </div>

        <p className="mb-6 text-center text-xs text-[#555]">
          Scan with your phone to open in Telegram
        </p>

        {/* Telegram Link */}
        <a
          href={bot.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 border border-[#333] bg-[#111] py-3 text-sm text-white transition hover:bg-[#1a1a1a]"
        >
          Open in Telegram
          <ExternalLink size={14} />
        </a>

        <p className="mt-4 text-center text-xs text-[#555]">
          {bot.telegramHandle}
        </p>
      </div>
    </div>
  );
}
