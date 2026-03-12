"use client";

import { useState } from "react";
import Link from "next/link";
import { bots } from "@/data/bots";
import BotModal from "@/components/BotModal";
import type { Bot } from "@/data/bots";

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

  const filtered = filter === "all" ? bots : bots.filter((b) => b.status === filter);
  const totalInstalls = bots.reduce((sum, b) => sum + b.installs, 0);

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
        <div className="mx-auto max-w-5xl">
          <pre className="overflow-x-auto text-[10px] leading-tight text-[#555] sm:text-xs">
            {ASCII_LOGO}
          </pre>
          <h1 className="mt-6 text-lg text-white sm:text-xl">
            The AI Bots Directory.
          </h1>
          <p className="mt-2 max-w-xl text-sm text-[#888]">
            AI bots you can try right now on Telegram. Built by{" "}
            <a
              href="https://topify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-[#333] underline-offset-4 hover:decoration-white"
            >
              Topify.ai
            </a>
            . Click any bot to get its QR code and link.
          </p>
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
              All ({totalInstalls.toLocaleString()})
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
                      {bot.installs.toLocaleString()}
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
          <a
            href="https://topify.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-white"
          >
            Built by Topify.ai
          </a>
        </div>
      </footer>

      {/* Modal */}
      {selectedBot && (
        <BotModal bot={selectedBot} onClose={() => setSelectedBot(null)} />
      )}
    </div>
  );
}
