import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Bot } from "@/data/bots";

const statusColors: Record<string, string> = {
  live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  beta: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "coming-soon": "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const pricingLabels: Record<string, string> = {
  free: "Free",
  "coming-soon": "Coming Soon",
  contact: "Contact Us",
};

export default function BotCard({ bot }: { bot: Bot }) {
  return (
    <Link href={`/bots/${bot.slug}`}>
      <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10">
        {/* Gradient glow on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${bot.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
        />

        <div className="relative z-10">
          {/* Icon & Status */}
          <div className="mb-4 flex items-start justify-between">
            <span className="text-4xl">{bot.icon}</span>
            <Badge variant="outline" className={statusColors[bot.status]}>
              {bot.status === "coming-soon" ? "Soon" : bot.status === "beta" ? "Beta" : "Live"}
            </Badge>
          </div>

          {/* Name */}
          <h3 className="mb-1 text-lg font-semibold text-white">{bot.name}</h3>

          {/* Tagline */}
          <p className="mb-4 text-sm text-gray-400 line-clamp-2">{bot.tagline}</p>

          {/* Categories */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {bot.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-gray-300"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-purple-400">
              {pricingLabels[bot.pricing]}
            </span>
            <span className="text-sm text-gray-500 transition group-hover:text-gray-300">
              View details &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
