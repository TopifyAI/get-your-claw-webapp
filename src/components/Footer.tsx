import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a1a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪝</span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                GetYourClaw
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              AI agents that work for you. Browse, try, and deploy powerful bots built by Topify.ai.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/bots" className="text-sm text-gray-300 hover:text-white">
                Browse Bots
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Built by
            </h3>
            <a
              href="https://topify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Topify.ai
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GetYourClaw.ai — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
