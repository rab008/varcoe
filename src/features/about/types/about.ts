export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: { src: string; alt: string };
};

export type AboutIntroContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points: string[];
  cta: { label: string; href: string };
  image: { src: string; alt: string; width: number; height: number };
};
