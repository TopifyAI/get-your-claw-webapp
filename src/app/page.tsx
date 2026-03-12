"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { bots } from "@/data/bots";
import BotModal from "@/components/BotModal";
import type { Bot } from "@/data/bots";

const TELEGRAM_BOT_URL = "https://t.me/topify_vanillabot";

const SLUG_TO_STAT_KEY: Record<string, string> = {
  "geo-agent": "geo",
  "interviewing-bot": "hiring",
  "vanilla-bot": "vanilla",
  "story-girl": "storygirl",
  "fortune-master": "suanming",
};

const ASCII_LOGO = `
 ██████╗██╗      █████╗ ██╗    ██╗
██╔════╝██║     ██╔══██╗██║    ██║
██║     ██║     ███████║██║ █╗ ██║
██║     ██║     ██╔══██║██║███╗██║
╚██████╗███████╗██║  ██║╚███╔███╔╝
 ╚═════╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝
`;

export default function Home() {
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [filter, setFilter] = useState<"all" | "live" | "beta">("all");
  const [stats, setStats] = useState<Record<string, number>>({ geo: 0, hiring: 0, vanilla: 0, storygirl: 0, suanming: 0 });

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {});
  }, []);

  const filtered = filter === "all" ? bots : bots.filter((b) => b.status === filter);
  const totalUsers = (stats.geo || 0) + (stats.hiring || 0) + (stats.vanilla || 0) + (stats.storygirl || 0) + (stats.suanming || 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#222]">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white">GetYourClaw</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-[#888] transition hover:text-white">
              /about
            </Link>
            <a
              href="https://topify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#888] transition hover:text-white"
            >
              /topify.ai
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[#222] px-4 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Left — text */}
          <div className="flex-1">
            <pre className="overflow-x-auto text-[10px] leading-tight text-[#555] sm:text-xs">
              {ASCII_LOGO}
            </pre>
            <h1 className="mt-6 text-lg text-white sm:text-xl">
              Enterprise AI Bots That Solve Real Problems.
            </h1>
            <p className="mt-2 max-w-xl text-sm text-[#888]">
              Each user gets their own isolated OpenClaw AI agent through a single
              Telegram interface — powered by our routing and EC2 pool management
              system. No setup, no infrastructure. Just open Telegram and start. Built by{" "}
              <a
                href="https://topify.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-[#333] underline-offset-4 hover:decoration-white"
              >
                Topify.ai
              </a>
              .
            </p>
          </div>

          {/* Right — QR code */}
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/vanilla_bot_qr.jpg"
                alt="Vanilla Bot Telegram QR Code"
                width={300}
                height={300}
                className="h-auto w-[300px]"
                priority
              />
            </div>
            <p className="text-xs text-[#555]">Scan to start chatting on Telegram</p>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#888] transition hover:text-white"
            >
              Open in Telegram <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          {/* Filter tabs */}
          <div className="mb-6 flex items-center gap-1 border-b border-[#222]">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs transition ${
                filter === "all"
                  ? "border-b border-white text-white"
                  : "text-[#888] hover:text-white"
              }`}
            >
              All ({totalUsers.toLocaleString()})
            </button>
            <button
              onClick={() => setFilter("live")}
              className={`px-4 py-2 text-xs transition ${
                filter === "live"
                  ? "border-b border-white text-white"
                  : "text-[#888] hover:text-white"
              }`}
            >
              Live
            </button>
            <button
              onClick={() => setFilter("beta")}
              className={`px-4 py-2 text-xs transition ${
                filter === "beta"
                  ? "border-b border-white text-white"
                  : "text-[#888] hover:text-white"
              }`}
            >
              Beta
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#222] text-left text-xs text-[#555]">
                  <th className="w-12 pb-3 font-normal">#</th>
                  <th className="pb-3 font-normal">Bot</th>
                  <th className="pb-3 font-normal">Category</th>
                  <th className="pb-3 text-right font-normal">Status</th>
                  <th className="pb-3 text-right font-normal">Users</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((bot) => (
                  <tr
                    key={bot.slug}
                    onClick={() => setSelectedBot(bot)}
                    className="group cursor-pointer border-b border-[#161616] transition hover:bg-[#111]"
                  >
                    <td className="py-4 text-sm text-[#555]">{bot.rank}</td>
                    <td className="py-4">
                      <div>
                        <span className="text-sm text-white group-hover:underline">
                          {bot.name}
                        </span>
                        <p className="mt-0.5 text-xs text-[#666]">{bot.tagline}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="rounded border border-[#222] bg-[#161616] px-2 py-0.5 text-[10px] text-[#888]">
                        {bot.category}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          bot.status === "live" ? "bg-green-500" : "bg-yellow-500"
                        }`}
                      />
                    </td>
                    <td className="py-4 text-right text-sm text-[#888]">
                      {(stats[SLUG_TO_STAT_KEY[bot.slug]] || 0).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-sm text-[#555]">
              No bots match this filter.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] px-4 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-xs text-[#555]">
            &copy; {new Date().getFullYear()} GetYourClaw.ai
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#555] hover:text-white">
              Privacy
            </Link>
            <a
              href="https://topify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#555] hover:text-white"
            >
              Built by Topify.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedBot && (
        <BotModal bot={selectedBot} onClose={() => setSelectedBot(null)} />
      )}
    </div>
  );
}
