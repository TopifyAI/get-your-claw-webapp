import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — GetYourClaw.ai",
  description: "Learn about GetYourClaw.ai and the team behind it.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#222]">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="text-sm font-bold text-white">
            GetYourClaw
          </Link>
          <Link href="/" className="text-xs text-[#888] hover:text-white">
            /home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-16">
        <h1 className="mb-8 text-lg text-white">About</h1>

        <div className="space-y-6 text-sm leading-relaxed text-[#888]">
          <p>
            <span className="text-white">GetYourClaw.ai</span> is a directory of enterprise AI bots built by{" "}
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

          <p>
            We give every user their own isolated OpenClaw AI agent through a
            single Telegram interface. Our routing and EC2 pool management system
            handles all the infrastructure — no setup, no servers, no hassle.
            Just open Telegram and start talking to your dedicated agent.
          </p>

          <p>
            We build AI bots that solve real problems inside companies — hiring,
            marketing, growth, and day-to-day operations.
          </p>

          <div className="border border-[#222] p-6">
            <p className="mb-4 text-xs text-[#555]">// how it works</p>
            <ul className="space-y-2 text-xs">
              <li className="text-[#888]">
                <span className="text-[#555]">1.</span> Each user gets an isolated OpenClaw agent — no shared state, no cross-talk
              </li>
              <li className="text-[#888]">
                <span className="text-[#555]">2.</span> Our EC2 pool routing system auto-provisions and manages agents at scale
              </li>
              <li className="text-[#888]">
                <span className="text-[#555]">3.</span> One Telegram interface for everything — marketing, hiring, growth
              </li>
              <li className="text-[#888]">
                <span className="text-[#555]">4.</span> Growth — automate the work across every department
              </li>
            </ul>
          </div>

          <p>
            Scan a QR code or tap a link to start using any bot. No sign-up
            walls, no contracts, no friction.
          </p>

          <p>
            Questions? Reach us at{" "}
            <a
              href="mailto:support@topify.ai"
              className="text-white underline decoration-[#333] underline-offset-4 hover:decoration-white"
            >
              support@topify.ai
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-xs text-[#555] hover:text-white"
          >
            &larr; back to directory
          </Link>
        </div>
      </main>

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
    </div>
  );
}
