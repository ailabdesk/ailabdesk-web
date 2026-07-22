export interface Tool {
  id: string;
  name: string;
  slug: string;

  description: string;

  category: string;

  pricing: "Free" | "Freemium" | "Paid" | "Enterprise";

  rating: number;

  logo: string;

  color: string;

  website: string;

  affiliateUrl?: string;

  featured?: boolean;
}