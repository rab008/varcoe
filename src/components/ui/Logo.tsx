type LogoVariant = "default" | "reversed";

type LogoProps = {
  /** "default" = full colour (light backgrounds); "reversed" = all white (dark backgrounds). */
  variant?: LogoVariant;
  className?: string;
};

/**
 * Varcoe wordmark, recreated as a scalable inline SVG so it's crisp at any size,
 * token-driven, and needs no asset request. Set the height via `className`
 * (width follows the viewBox aspect ratio).
 *
 * NOTE: a typographic recreation of the brand artwork — swap in the official
 * vector later if needed (the component API stays the same).
 */
export function Logo({
  variant = "default",
  className = "h-10 w-auto",
}: LogoProps) {
  const reversed = variant === "reversed";
  const clipId = `varcoe-bar-${variant}`;

  const wordmarkColor = reversed ? "#ffffff" : "var(--color-cta)";
  const barTextColor = "#ffffff";

  return (
    <svg
      viewBox="0 0 480 96"
      className={className}
      role="img"
      aria-label="Varcoe — Air Conditioning and Heat Pumps"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <title>Varcoe — Air Conditioning and Heat Pumps</title>

      <text
        x="2"
        y="52"
        textLength="476"
        lengthAdjust="spacingAndGlyphs"
        fontSize="56"
        fontWeight="800"
        fill={wordmarkColor}
      >
        VARCOE
      </text>

      {reversed ? (
        <rect
          x="1.5"
          y="64"
          width="477"
          height="29"
          rx="14.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      ) : (
        <>
          <clipPath id={clipId}>
            <rect x="0" y="64" width="480" height="30" rx="15" />
          </clipPath>
          <g clipPath={`url(#${clipId})`}>
            <rect
              x="0"
              y="64"
              width="300"
              height="30"
              fill="var(--color-primary)"
            />
            <rect
              x="300"
              y="64"
              width="180"
              height="30"
              fill="var(--color-cta)"
            />
          </g>
        </>
      )}

      <text
        x="150"
        y="84"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        letterSpacing="1"
        fill={barTextColor}
      >
        AIR CONDITIONING
      </text>
      <text
        x="390"
        y="84"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        letterSpacing="1"
        fill={barTextColor}
      >
        AND HEAT PUMPS
      </text>
    </svg>
  );
}
