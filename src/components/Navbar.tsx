"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🪝</span>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
            GetYourClaw
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/bots" className="text-sm text-gray-300 transition hover:text-white">
            Browse Bots
          </Link>
          <Link href="/about" className="text-sm text-gray-300 transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-sm text-gray-300 transition hover:text-white">
            Contact
          </Link>
          <Link
            href="/bots"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore Agents
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0a0a1a]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/bots" className="text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
              Browse Bots
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
