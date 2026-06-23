import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site";

type ServiceNavItem = { slug: string; title: string };

const footerSocials: { name: string; href: string; icon: IconName }[] = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { name: "X", href: siteConfig.social.x, icon: "x" },
];

export function Footer({ services }: { services: ServiceNavItem[] }) {
  const year = new Date().getFullYear();
  const { business } = siteConfig;
  const fullAddress = `${business.address.street}, ${business.address.locality}, ${business.address.region}`;

  return (
    <footer className="bg-dark text-white/80">
      {/* Top contact strip */}
      <div className="border-b border-white/10">
        <Container className="grid gap-5 py-8 sm:grid-cols-3 sm:gap-0">
          <div className="flex items-start gap-3 sm:items-center sm:justify-center sm:border-r sm:border-white/10 sm:px-4">
            <Icon name="pin" className="h-7 w-7 shrink-0 text-accent" />
            <address className="text-sm not-italic text-white/80">
              {fullAddress}
            </address>
          </div>
          <div className="flex items-start gap-3 sm:items-center sm:justify-center sm:border-r sm:border-white/10 sm:px-4">
            <Icon name="mail" className="h-7 w-7 shrink-0 text-accent" />
            <span className="text-sm">
              <span className="block text-white/60">Email us:</span>
              <a
                href={`mailto:${business.email}`}
                className="font-medium text-white transition-colors hover:text-accent"
              >
                {business.email}
              </a>
            </span>
          </div>
          <div className="flex items-start gap-3 sm:items-center sm:justify-center sm:px-4">
            <Icon name="phone" className="h-7 w-7 shrink-0 text-accent" />
            <span className="text-sm">
              <span className="block text-white/60">Call us on:</span>
              <a
                href={`tel:${business.phone}`}
                className="font-bold text-white transition-colors hover:text-accent"
              >
                {business.displayPhone}
              </a>
            </span>
          </div>
        </Container>
      </div>

      {/* Body */}
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`${siteConfig.name} — home`}
          >
            <Logo variant="reversed" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Useful links">
          <h2 className="text-base font-bold text-white">Useful Links</h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h2 className="text-base font-bold text-white">Our Services</h2>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-white">Follow us</h2>
          <p className="mt-4 text-sm text-white/60">
            Get the latest updates and offers.
          </p>
          <ul className="mt-4 flex items-center gap-3">
            {footerSocials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Varcoe on ${social.name}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </Container>
      </div>
    </footer>
  );
}
