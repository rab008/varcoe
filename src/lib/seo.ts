import { siteConfig } from "@/lib/site";
import { services } from "@/features/services/services-data";

/**
 * Builds the homepage HVACBusiness JSON-LD from first-party site config.
 * Rendered via a <script type="application/ld+json"> tag (trusted, self-authored
 * data — the sanctioned use of dangerouslySetInnerHTML).
 */
export function getLocalBusinessJsonLd(): Record<string, unknown> {
  const { business } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og/home.svg`,
    telephone: business.phone,
    email: business.email,
    areaServed: business.areaServed,
    openingHours: business.hours,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    // Only verified profiles belong in sameAs. Instagram & X are still generic
    // root URLs in site config, so they're intentionally excluded until real.
    sameAs: [siteConfig.social.facebook],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${siteConfig.url}/services/${service.slug}`,
      },
    })),
  };
}
