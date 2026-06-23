import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "cta" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  cta: "bg-cta text-white hover:bg-cta-dark",
  outline: "border border-border text-ink hover:bg-surface",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

/** Token-driven button. Renders a Next.js `Link` when `href` is provided. */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    return (
      <Link className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props;
  void _href; // `href` is undefined on the button variant — keep it off the DOM
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
