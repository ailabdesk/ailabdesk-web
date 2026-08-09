export interface Category {
  id: string;
  title: string;
  slug: string;
  toolCategory: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "ai-assistants",
    title: "AI Assistants",
    slug: "ai-assistants",
    toolCategory: "AI Assistant",
    description: "AI assistants for writing, reasoning, research, and everyday work.",
  },
  {
    id: "ai-coding",
    title: "AI Coding",
    slug: "coding",
    toolCategory: "AI Coding",
    description: "AI-powered coding tools for developers and software teams.",
  },
  {
    id: "ai-search",
    title: "AI Search",
    slug: "ai-search",
    toolCategory: "AI Search",
    description: "AI-powered search and research tools for finding better answers.",
  },
  {
    id: "image-generation",
    title: "Image Generation",
    slug: "image-generation",
    toolCategory: "Image Generation",
    description: "AI tools for creating images, artwork, illustrations, and visual content.",
  },
  {
    id: "voice-ai",
    title: "Voice AI",
    slug: "voice",
    toolCategory: "Voice AI",
    description: "AI voice tools for narration, voice generation, dubbing, and audio creation.",
  },
];