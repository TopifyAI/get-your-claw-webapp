export interface Bot {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  useCases: string[];
  categories: string[];
  pricing: "free" | "coming-soon" | "contact";
  status: "live" | "beta" | "coming-soon";
  icon: string;
  gradient: string;
  tryUrl?: string;
}

export const bots: Bot[] = [
  {
    slug: "peec-monitor-bot",
    name: "Peec Monitor Bot",
    tagline: "Automated GEO brand visibility monitoring via Telegram",
    description:
      "A powerful Telegram bot that automates GEO (Generative Engine Optimization) brand visibility monitoring using Peec.ai. It scrapes multi-engine data from ChatGPT, Perplexity, Gemini, and more — then generates structured reports delivered straight to your Telegram.",
    features: [
      "Multi-engine AI visibility tracking (ChatGPT, Perplexity, Gemini, Claude)",
      "Automated daily/weekly monitoring schedules",
      "Structured PDF & text reports via Telegram",
      "Brand mention & sentiment analysis",
      "Competitor comparison tracking",
      "Custom query configuration",
    ],
    useCases: [
      "Track how AI engines mention your brand",
      "Monitor competitor visibility in AI responses",
      "Generate executive reports on AI brand presence",
      "Alert on visibility drops or spikes",
    ],
    categories: ["Monitoring", "GEO"],
    pricing: "coming-soon",
    status: "live",
    icon: "📡",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    slug: "long-er",
    name: "Long Er (龙二)",
    tagline: "AI 大管家 — Your intelligent workspace agent",
    description:
      "Long Er (龙二) is Topify's AI 大管家 (Grand Butler) — an OpenClaw-powered workspace agent with deep Lark integration. It manages tasks, coordinates workflows, answers questions, and bridges your team's communication through Lark Bot.",
    features: [
      "OpenClaw-powered AI agent with custom persona",
      "Lark Bot integration for team communication",
      "29+ specialized agent skills",
      "Memory & context persistence across conversations",
      "Task management & workflow automation",
      "Multi-language support (EN/CN)",
    ],
    useCases: [
      "Team Q&A and knowledge base queries",
      "Automated task delegation and tracking",
      "Cross-platform communication bridging",
      "Daily standup summaries and reminders",
    ],
    categories: ["Productivity", "Communication"],
    pricing: "coming-soon",
    status: "live",
    icon: "🐉",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    slug: "geo-agent",
    name: "GEO Agent",
    tagline: "Optimize your brand's visibility in AI-generated responses",
    description:
      "The GEO Agent helps businesses optimize their presence in AI-generated search results. It analyzes how AI models reference your brand, identifies optimization opportunities, and provides actionable recommendations to improve your generative engine visibility.",
    features: [
      "AI response analysis across major LLMs",
      "Brand visibility scoring & benchmarking",
      "Content optimization recommendations",
      "Keyword & query strategy planning",
      "Automated GEO audits",
      "Competitive landscape mapping",
    ],
    useCases: [
      "Improve brand mentions in ChatGPT, Perplexity, etc.",
      "Develop GEO-optimized content strategy",
      "Benchmark against competitors in AI search",
      "Track GEO improvements over time",
    ],
    categories: ["GEO", "Marketing"],
    pricing: "coming-soon",
    status: "beta",
    icon: "🎯",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    slug: "content-gen-bot",
    name: "Content Generation Bot",
    tagline: "AI-powered content creation at scale",
    description:
      "A FastAPI-powered content generation engine that creates high-quality, GEO-optimized content at scale. From blog posts to social media, this bot generates content designed to maximize your visibility in both traditional and AI-powered search.",
    features: [
      "GEO-optimized content generation",
      "Multiple content formats (blog, social, email)",
      "Brand voice customization",
      "Bulk content generation via API",
      "SEO + GEO dual optimization",
      "Content performance tracking",
    ],
    useCases: [
      "Generate GEO-optimized blog posts",
      "Create social media content at scale",
      "Produce SEO-friendly landing pages",
      "Automate email newsletter content",
    ],
    categories: ["Content", "Marketing"],
    pricing: "coming-soon",
    status: "beta",
    icon: "✍️",
    gradient: "from-orange-500 to-red-600",
  },
  {
    slug: "seo-geo-skills",
    name: "SEO/GEO Skills Agent",
    tagline: "Specialized skills for SEO and GEO automation",
    description:
      "A collection of specialized AI agent skills focused on SEO and GEO automation. These skills can be composed into workflows for comprehensive search optimization across both traditional search engines and AI-powered platforms.",
    features: [
      "Modular skill-based architecture",
      "SEO audit & analysis skills",
      "GEO visibility optimization skills",
      "Keyword research automation",
      "Backlink analysis & outreach",
      "Technical SEO checks",
    ],
    useCases: [
      "Run comprehensive SEO/GEO audits",
      "Automate keyword research workflows",
      "Monitor technical SEO health",
      "Generate optimization task lists",
    ],
    categories: ["GEO", "Marketing"],
    pricing: "free",
    status: "live",
    icon: "🔧",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    slug: "ai-response-catch",
    name: "AI Response Catch",
    tagline: "Monitor and capture AI model responses in real-time",
    description:
      "AI Response Catch monitors and captures responses from major AI models in real-time. Track what AI platforms say about your brand, products, or industry — and get instant alerts when something changes.",
    features: [
      "Real-time AI response monitoring",
      "Multi-model tracking (GPT, Claude, Gemini, etc.)",
      "Change detection & alerting",
      "Response archiving & history",
      "Sentiment tracking over time",
      "API access for custom integrations",
    ],
    useCases: [
      "Monitor brand mentions across AI platforms",
      "Detect changes in AI-generated recommendations",
      "Archive AI responses for compliance",
      "Track industry narrative shifts in AI outputs",
    ],
    categories: ["Monitoring", "GEO"],
    pricing: "coming-soon",
    status: "beta",
    icon: "🪤",
    gradient: "from-indigo-500 to-violet-600",
  },
];

export const categories = [
  "All",
  "GEO",
  "Monitoring",
  "Marketing",
  "Productivity",
  "Communication",
  "Content",
];

export function getBotBySlug(slug: string): Bot | undefined {
  return bots.find((b) => b.slug === slug);
}

export function getBotsByCategory(category: string): Bot[] {
  if (category === "All") return bots;
  return bots.filter((b) => b.categories.includes(category));
}
