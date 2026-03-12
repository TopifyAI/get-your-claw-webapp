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
            <span className="text-white">GetYourClaw.ai</span> is a directory of AI bots built by{" "}
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
            We build practical AI tools that solve real problems — from GEO
            (Generative Engine Optimization) monitoring to interview prep to everyday
            AI assistance. All our bots are available on Telegram.
          </p>

          <div className="border border-[#222] p-6">
            <p className="mb-4 text-xs text-[#555]">// what we do</p>
            <ul className="space-y-2 text-xs">
              <li className="text-[#888]">
                <span className="text-[#555]">1.</span> Build AI bots that work out of the box
              </li>
              <li className="text-[#888]">
                <span className="text-[#555]">2.</span> Focus on GEO — how brands appear in AI responses
              </li>
              <li className="text-[#888]">
                <span className="text-[#555]">3.</span> Ship fast, iterate based on real usage
              </li>
            </ul>
          </div>

          <p>
            Scan a QR code or tap a link to start using any of our bots. No sign-up
            walls, no friction.
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
