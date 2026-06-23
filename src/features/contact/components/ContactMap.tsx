import { siteConfig } from "@/lib/site";

/**
 * Location map — a keyless Google Maps embed (no API key needed for the basic
 * `output=embed` URL). Lazy-loaded so it never blocks initial render. Swap to
 * the Maps Embed API (with key) later if richer control is needed.
 */
export function ContactMap() {
  const { address } = siteConfig.business;
  const query = encodeURIComponent(
    `${address.street}, ${address.locality}, ${address.region}, New Zealand`,
  );

  return (
    <div className="overflow-hidden rounded-lg border border-border shadow-card">
      <iframe
        title={`Map showing ${siteConfig.legalName} in ${address.locality}`}
        src={`https://maps.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-80 w-full lg:h-96"
      />
    </div>
  );
}
