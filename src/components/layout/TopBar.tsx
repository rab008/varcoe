import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

const socialLinks: { name: string; href: string; icon: IconName }[] = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { name: "X", href: siteConfig.social.x, icon: "x" },
];

/**
 * Global utility bar above the header: a brand-blue strip carrying the key
 * business facts plus a highlighted feature link on the left, and social links
 * on the right. Visible at every width; the facts reveal progressively as space
 * allows (mobile: hours only · tablet: + Call Us · desktop: + address · wide: + calculator).
 */
export function TopBar() {
  const { business } = siteConfig;
  const { address } = business;
  const addressLine = `${address.street}, ${address.locality}, ${address.region}`;
  const hoursLine = "Monday – Friday: 8.00am – 5.00pm";

  return (
    <div className="bg-primary text-white">
      <Container className="flex h-11 items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-5 lg:gap-8">
          <span className="inline-flex items-center gap-2 font-semibold">
            <Icon name="clock" className="h-4 w-4 shrink-0 text-white/80" />
            {hoursLine}
          </span>
          <a
            href={`tel:${business.phone}`}
            className="hidden items-center gap-2 font-semibold text-white transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[768px]:inline-flex"
          >
            <Icon name="phone" className="h-4 w-4 shrink-0 text-white/80" />
            Call Us : {business.displayPhone}
          </a>
          <span className="hidden items-center gap-2 font-semibold min-[993px]:inline-flex">
            <Icon name="pin" className="h-4 w-4 shrink-0 text-white/80" />
            {addressLine}
          </span>
          <Link
            href="/heat-pump-calculator"
            className="hidden font-bold text-cta underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[1180px]:inline"
          >
            Heat Pump Calculator
          </Link>
        </div>

        <ul className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Varcoe on ${social.name}`}
                className="text-white/80 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
