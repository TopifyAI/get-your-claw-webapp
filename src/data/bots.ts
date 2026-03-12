export interface Bot {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  telegramUrl: string;
  telegramHandle: string;
  installs: number;
  rank: number;
  status: "live" | "beta" | "coming-soon";
  category: string;
}

export const bots: Bot[] = [
  {
    slug: "geo-agent",
    name: "GEO Agent",
    tagline: "Optimize your brand's visibility in AI-generated responses",
    description:
      "The GEO Agent helps businesses understand and optimize how they appear in AI-generated search results across ChatGPT, Perplexity, Gemini, Claude, and more. Track visibility, get optimization recommendations, and monitor competitors.",
    telegramUrl: "https://t.me/topify_geo_bot",
    telegramHandle: "@topify_geo_bot",
    installs: 1240,
    rank: 1,
    status: "live",
    category: "GEO",
  },
  {
    slug: "interviewing-bot",
    name: "Interviewing Bot",
    tagline: "AI-powered mock interviews and coaching",
    description:
      "Practice interviews with an AI interviewer that adapts to your role, experience level, and target company. Get real-time feedback on your answers, body language tips, and personalized improvement plans.",
    telegramUrl: "https://t.me/topify_interview_bot",
    telegramHandle: "@topify_interview_bot",
    installs: 870,
    rank: 2,
    status: "live",
    category: "Career",
  },
  {
    slug: "vanilla-bot",
    name: "Vanilla Bot",
    tagline: "Your everyday AI assistant — simple, fast, reliable",
    description:
      "A clean, no-frills AI assistant for everyday tasks. Ask questions, generate text, summarize content, translate languages, and more. No bloat, no complexity — just a bot that works.",
    telegramUrl: "https://t.me/topify_vanilla_bot",
    telegramHandle: "@topify_vanilla_bot",
    installs: 650,
    rank: 3,
    status: "live",
    category: "General",
  },
];

export function getBotBySlug(slug: string): Bot | undefined {
  return bots.find((b) => b.slug === slug);
}
