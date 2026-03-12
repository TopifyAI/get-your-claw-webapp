import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { bots, getBotBySlug } from "@/data/bots";
import QRCode from "@/components/QRCode";
import BotCard from "@/components/BotCard";

export function generateStaticParams() {
  return bots.map((bot) => ({ slug: bot.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bot = getBotBySlug(slug);
  if (!bot) return { title: "Bot Not Found" };
  return {
    title: `${bot.name} — GetYourClaw.ai`,
    description: bot.tagline,
  };
}

export default async function BotDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bot = getBotBySlug(slug);
  if (!bot) notFound();

  const related = bots
    .filter((b) => b.slug !== bot.slug && b.categories.some((c) => bot.categories.includes(c)))
    .slice(0, 3);

  const statusColors: Record<string, string> = {
    live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    beta: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "coming-soon": "bg-gray-500/20 text-gray-400 border-gray-500/30",
  };

  const pricingLabels: Record<string, string> = {
    free: "Free",
    "coming-soon": "Pricing Coming Soon",
    contact: "Contact for Pricing",
  };

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/bots"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={16} /> Back to all bots
        </Link>

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-4 flex items-center gap-4">
              <span className="text-5xl">{bot.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">{bot.name}</h1>
                <p className="mt-1 text-lg text-gray-400">{bot.tagline}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className={statusColors[bot.status]}>
                {bot.status === "coming-soon" ? "Coming Soon" : bot.status === "beta" ? "Beta" : "Live"}
              </Badge>
              {bot.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                >
                  {cat}
                </span>
              ))}
              <span className="text-sm font-medium text-purple-400">
                {pricingLabels[bot.pricing]}
              </span>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex-shrink-0">
            <QRCode url={`https://getyourclaw.ai/bots/${bot.slug}`} />
          </div>
        </div>

        {/* Description */}
        <div className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-3 text-xl font-semibold text-white">About</h2>
          <p className="leading-relaxed text-gray-300">{bot.description}</p>
        </div>

        {/* Features & Use Cases */}
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">Features</h2>
            <ul className="space-y-3">
              {bot.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-semibold text-white">Use Cases</h2>
            <ul className="space-y-3">
              {bot.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
                  <span className="text-sm text-gray-300">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">Interested in this bot?</h2>
          <p className="mb-6 text-gray-400">
            Get in touch to learn more or request early access.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-white">Related Agents</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b) => (
                <BotCard key={b.slug} bot={b} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
