import type { IconName } from "@/components/ui/Icon";

export type CtaLink = { label: string; href: string };

export type HomeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Highlight = { icon: IconName; title: string; text: string };
export type Advantage = { icon: IconName; title: string; text: string };
export type Stat = { value: string; label: string };
export type Testimonial = { quote: string; author: string; role: string };
export type Brand = {
  name: string;
  blurb: string;
  image: { src: string; alt: string };
};
export type ProcessStep = { step: number; title: string; text: string };

export type HeroContent = {
  eyebrow: string;
  title: string;
  promise: string;
  supporting: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  promo: string;
  image: HomeImage;
};

export type AboutVideo = { videoId: string; title: string };

export type AboutContent = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  stat: Stat;
  video: AboutVideo;
};

export type SectionIntro = { eyebrow: string; title: string; intro?: string };

export type AdvantagesContent = SectionIntro & { items: Advantage[] };
export type ReviewVideo = { videoId: string; title: string };
export type ReviewRating = { score: string; count: string; label: string };
export type TestimonialsContent = SectionIntro & {
  items: Testimonial[];
  videos?: ReviewVideo[];
  rating?: ReviewRating;
  link?: CtaLink;
};
export type BrandsContent = SectionIntro & { items: Brand[] };
export type ProcessContent = SectionIntro & { items: ProcessStep[] };

export type AcHeatPumpCategory = {
  title: string;
  description: string;
  /** Optional hero image; when absent, render a tokenized placeholder. */
  image?: HomeImage;
};

export type AcHeatPumpsContent = SectionIntro & {
  items: AcHeatPumpCategory[];
  /** Shared CTA targets for every card's Cooling/Heating buttons. */
  coolingHref: string;
  heatingHref: string;
};

export type DiagnosticsContent = {
  title: string;
  subtitle: string;
  cta: CtaLink;
};
export type QuoteCtaContent = { title: string; subtitle: string; cta: CtaLink };

export type BookQuoteCtaContent = {
  title: string;
  body: string;
  cta: CtaLink;
  /** Optional image; when absent, render a tokenized placeholder. */
  image?: HomeImage;
};
