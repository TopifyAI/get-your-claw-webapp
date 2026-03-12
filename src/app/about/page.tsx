import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — GetYourClaw.ai",
  description: "Learn about GetYourClaw.ai and the team behind it.",
};

export default function AboutPage() {
  return (
    <div className="px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-white">About GetYourClaw</h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">GetYourClaw.ai</strong> is a curated marketplace of AI
            agents and bots built by{" "}
            <a
              href="https://topify.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Topify.ai
            </a>
            . We build practical, production-ready AI tools that solve real business problems.
          </p>

          <p>
            Our focus is on <strong className="text-white">Generative Engine Optimization (GEO)</strong>{" "}
            — helping businesses understand and optimize how they appear in AI-generated responses
            across platforms like ChatGPT, Perplexity, Gemini, and Claude.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">What We Believe</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-purple-400">&#x2022;</span>
                AI agents should be accessible, not locked behind enterprise contracts
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">&#x2022;</span>
                Every business needs to understand their AI visibility
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">&#x2022;</span>
                The best tools are built by people who use them daily
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">&#x2022;</span>
                Automation should augment human work, not replace it
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6">
            <h2 className="mb-3 text-xl font-semibold text-white">Built by Topify.ai</h2>
            <p className="text-sm">
              Topify.ai is a GEO platform that helps brands monitor and optimize their visibility
              in AI-generated search results. GetYourClaw.ai is where we share the bots and agents
              we&apos;ve built along the way.
            </p>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/bots"
              className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Browse Our Bots
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
