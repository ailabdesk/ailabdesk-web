import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    slug: "chatgpt",

    description:
      "The go-to AI assistant for writing, coding, and getting things done faster.",

    category: "AI Assistant",

    pricing: "Freemium",

    rating: 4.9,

    logo: "/logos/chatgpt.svg",

    color: "#10A37F",

    website: "https://chatgpt.com",

    affiliateUrl: "",

    featured: true,
    hero: true,
    badge: "Editor's Pick",
  },

  {
    id: "claude",
    name: "Claude",
    slug: "claude",

    description:
      "Best for deep thinking — long documents, complex reasoning, careful writing.",

    category: "AI Assistant",

    pricing: "Freemium",

    rating: 4.8,

    logo: "/logos/claude.svg",

    color: "#D97757",

    website: "https://claude.ai",

    affiliateUrl: "",

    featured: true,

    hero: true,

    badge: "Popular",
  },

  {
    id: "cursor",
    name: "Cursor",
    slug: "cursor",

    description:
      "Code editor built for developers who want AI pair-programming, not autocomplete.",

    category: "AI Coding",

    pricing: "Paid",

    rating: 4.8,

    logo: "/logos/cursor.svg",

    color: "#000000",

    website: "https://cursor.com",

    affiliateUrl: "",

    featured: true,

    hero: true,

    badge: "Popular",
  },

  {
    id: "perplexity",
    name: "Perplexity",
    slug: "perplexity",

    description:
      "AI-powered search engine that delivers fast, cited answers.",

    category: "AI Search",

    pricing: "Freemium",

    rating: 4.8,

    logo: "/logos/perplexity.svg",

    color: "#0EA5A4",

    website: "https://www.perplexity.ai",

    affiliateUrl: "",

    featured: true,

    hero: true,

    badge: "New",
  },

  {
    id: "midjourney",
    name: "Midjourney",
    slug: "midjourney",

    description:
      "Create high-quality AI-generated artwork and illustrations.",

    category: "Image Generation",

    pricing: "Paid",

    rating: 4.9,

    logo: "/logos/midjourney.svg",

    color: "#111827",

    website: "https://www.midjourney.com",

    affiliateUrl: "",

    featured: true,

    hero: true,
    badge: "Popular",
  },

  {
    id: "elevenlabs",
    name: "ElevenLabs",
    slug: "elevenlabs",

    description:
      "Industry-leading AI voice generation for creators and businesses.",

    category: "Voice AI",

    pricing: "Freemium",

    rating: 4.9,

    logo: "/logos/elevenlabs.svg",

    color: "#111111",

    website: "https://elevenlabs.io",

    affiliateUrl: "",

    featured: true,

    hero: true,
    badge: "Popular",
  },
];