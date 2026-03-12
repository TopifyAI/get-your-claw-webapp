import HeroSection from "@/components/HeroSection";
import BotCard from "@/components/BotCard";
import { bots } from "@/data/bots";
import Link from "next/link";
import { ArrowRight, Scan, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Bots */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Agents</h2>
              <p className="mt-2 text-gray-400">Our most popular AI bots</p>
            </div>
            <Link
              href="/bots"
              className="hidden items-center gap-1 text-sm text-purple-400 hover:text-purple-300 sm:flex"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bots.slice(0, 3).map((bot) => (
              <BotCard key={bot.slug} bot={bot} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20">
                <Scan className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">1. Browse</h3>
              <p className="text-sm text-gray-400">
                Explore our collection of AI agents built for different use cases — from GEO
                monitoring to content generation.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20">
                <Zap className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">2. Try</h3>
              <p className="text-sm text-gray-400">
                Scan the QR code or click to try any bot instantly. No setup required — just start
                using it.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/20">
                <Shield className="h-7 w-7 text-pink-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">3. Deploy</h3>
              <p className="text-sm text-gray-400">
                Ready to go big? Deploy bots into your workflow with full API access and custom
                configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Bots */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">All Agents</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bots.map((bot) => (
              <BotCard key={bot.slug} bot={bot} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/bots"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Explore All Bots <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
