import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[128px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/15 blur-[100px]" />
        <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
          <span className="text-lg">🪝</span>
          Built by Topify.ai
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Get Your{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Claw
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 sm:text-xl">
          AI agents that work for you. Browse our collection of powerful bots for GEO monitoring,
          content generation, workflow automation, and more.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/bots"
            className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40"
          >
            Browse All Bots
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-white/20 px-8 py-3 text-lg font-semibold text-gray-300 transition hover:border-white/40 hover:text-white"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-white">6+</div>
            <div className="text-sm text-gray-400">AI Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-gray-400">Automation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
