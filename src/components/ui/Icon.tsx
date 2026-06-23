import type { SVGProps } from "react";

export type IconName =
  | "wrench"
  | "shield"
  | "clock"
  | "medal"
  | "check"
  | "phone"
  | "phone-chat"
  | "star"
  | "sparkle"
  | "gear"
  | "truck"
  | "headset"
  | "dollar"
  | "droplet"
  | "snowflake"
  | "washer"
  | "wind"
  | "flame"
  | "thermostat"
  | "bolt"
  | "wine"
  | "mail"
  | "pin"
  | "facebook"
  | "instagram"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.18 5.18l-6.22 6.22a1.5 1.5 0 0 0 0 2.12l.88.88a1.5 1.5 0 0 0 2.12 0l6.22-6.22A4 4 0 0 0 17.7 9.3l-2.3 2.3-2-2 2.3-2.3Z" />
  ),
  shield: <path d="M12 3l7 3v5c0 4.6-3.1 8.2-7 9-3.9-.8-7-4.4-7-9V6l7-3Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7.5 21 12 18l4.5 3L15 13.5" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  "phone-chat": (
    <>
      <path d="M4 4.5h2.4l1.5 3.6-1.8 1.1a8.5 8.5 0 0 0 3.6 3.6l1.1-1.8 3.6 1.5V16a1.6 1.6 0 0 1-1.6 1.6A12.5 12.5 0 0 1 2.4 6.1 1.6 1.6 0 0 1 4 4.5Z" />
      <path d="M13 3.5h6.5A1.5 1.5 0 0 1 21 5v4a1.5 1.5 0 0 1-1.5 1.5h-3L13 13v-2.5h-.2" />
    </>
  ),
  star: (
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  ),
  sparkle: (
    <path d="M12 3v4M12 17v4M5 12H1M23 12h-4M6.3 6.3 9 9M15 15l2.7 2.7M17.7 6.3 15 9M9 15l-2.7 2.7" />
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  headset: (
    <path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Zm16 0a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Zm-2 4a4 4 0 0 1-4 3h-2" />
  ),
  dollar: (
    <>
      <path d="M12 2v20" />
      <path d="M16 6.5C16 4.6 14.2 4 12 4s-4 .9-4 3 2 3 4 3.5 4 1.4 4 3.5-1.8 3-4 3-4-.6-4-2.5" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  snowflake: (
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19M12 6l-2.5-2.5M12 6l2.5-2.5M12 18l-2.5 2.5M12 18l2.5 2.5M6 12l-2.5-2.5M6 12l-2.5 2.5M18 12l2.5-2.5M18 12l2.5 2.5" />
  ),
  washer: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="4.5" />
      <path d="M7 6h.01M10 6h.01" />
    </>
  ),
  wind: (
    <path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h9a2.5 2.5 0 1 1-2.5 2.5" />
  ),
  flame: (
    <path d="M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2.5.3 1.5-.8 2.5-1.5 2.5C16 7 13 6 12 3Zm-1.5 9A2.5 2.5 0 0 0 12 18" />
  ),
  thermostat: (
    <>
      <path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0Z" />
      <path d="M12 9v6.5" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  wine: (
    <>
      <path d="M8 3h8c0 4-1.5 7-4 7s-4-3-4-7Z" />
      <path d="M12 10v8M8 21h8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V5.5h-2.5C12.6 5.5 11 7 11 9v1.5H8.5V14H11v6h3v-6h2.5l.5-3.5H14V9.5c0-.3.2-.5.5-.5Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M17 6.8h.01" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4 4 20" />,
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

/** Decorative inline SVG icon set. Marked `aria-hidden`; convey meaning via adjacent text. */
export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
