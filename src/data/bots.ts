export interface Bot {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  telegramUrl: string;
  telegramHandle: string;
  qrImage: string;
  rank: number;
  status: "live" | "beta" | "coming-soon";
  category: string;
}

export const bots: Bot[] = [
  {
    slug: "geo-agent",
    name: "Growth Agent",
    tagline: "Marketing — track and optimize your brand's AI visibility",
    description:
      "Your competitors are already being recommended by AI — are you? The Growth Agent helps your marketing team understand how your brand appears in AI-generated search results across ChatGPT, Perplexity, Gemini, and Claude. Monitor competitors, track visibility trends, and get actionable recommendations to grow your presence where customers are searching.",
    telegramUrl: "https://t.me/topify_growthbot",
    telegramHandle: "@topify_growthbot",
    qrImage: "/images/growth_bot_qr.jpg",

    rank: 1,
    status: "live",
    category: "Marketing",
  },
  {
    slug: "interviewing-bot",
    name: "Interviewing Bot",
    tagline: "Hiring — AI-powered candidate screening and mock interviews",
    description:
      "Streamline your hiring pipeline with an AI interviewer that screens candidates, conducts structured mock interviews, and delivers scoring reports. Adapts to any role, seniority level, and company context. Save your recruiting team hours per hire.",
    telegramUrl: "https://t.me/topify_hiring_bot",
    telegramHandle: "@topify_hiring_bot",
    qrImage: "/images/hiring_bot_qr.jpg",

    rank: 2,
    status: "live",
    category: "Hiring",
  },
  {
    slug: "vanilla-bot",
    name: "Vanilla Bot",
    tagline: "Flexible — your all-in-one AI assistant for everything else",
    description:
      "The Swiss Army knife for your team. Draft emails, summarize reports, analyze data, translate documents, brainstorm strategies, and automate repetitive tasks. One bot that handles the work across every department — from ops to sales to customer success.",
    telegramUrl: "https://t.me/topify_vanillabot",
    telegramHandle: "@topify_vanillabot",
    qrImage: "/images/vanilla_bot_qr.jpg",

    rank: 3,
    status: "live",
    category: "Growth",
  },
  {
    slug: "story-girl",
    name: "Story Girl",
    tagline: "Entertainment — she's lived a lot, and she tells you everything",
    description:
      "She's not an assistant — she's a character with a past full of wild nights, heated encounters, and stories she's been dying to share. Every conversation is a first-person confession — vivid, sensory, unapologetic. She sets the mood, you just listen. Age-verified 18+ only. Speaks any language.",
    telegramUrl: "https://t.me/topify_nsfwbot",
    telegramHandle: "@topify_nsfwbot",
    qrImage: "/images/storygirl_bot_qr.jpg",
    rank: 4,
    status: "coming-soon",
    category: "Entertainment",
  },
  {
    slug: "fortune-master",
    name: "算命大师 · Fortune Master (experimental)",
    tagline: "Lifestyle — ancient Chinese fortune telling, one conversation away",
    description:
      "An AI fortune telling master rooted in Chinese metaphysics. Send your birth date for a BaZi reading, upload a palm photo, ask about feng shui, or consult the I Ching. He shows his work — real charts, real pillars, real hexagrams. Chinese & English.",
    telegramUrl: "https://t.me/topify_suanmingbot",
    telegramHandle: "@topify_suanmingbot",
    qrImage: "/images/suanming_bot_qr.jpg",
    rank: 5,
    status: "beta",
    category: "Lifestyle",
  },
];

export function getBotBySlug(slug: string): Bot | undefined {
  return bots.find((b) => b.slug === slug);
}
