import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

/**
 * "Our Address" block — real Varcoe NAP from `siteConfig`. Phone/email are
 * actionable links. Server Component.
 */
export function ContactInfo() {
  const { business } = siteConfig;
  const { address } = business;
  const addressLine = `${address.street}, ${address.locality}, ${address.region} ${address.country}`;

  const rows = [
    {
      icon: "pin" as const,
      label: "Address",
      content: <span className="text-muted">{addressLine}</span>,
    },
    {
      icon: "phone" as const,
      label: "Phone",
      content: (
        <a
          href={`tel:${business.phone}`}
          className="text-muted transition-colors hover:text-primary"
        >
          {business.displayPhone}
        </a>
      ),
    },
    {
      icon: "mail" as const,
      label: "Email",
      content: (
        <a
          href={`mailto:${business.email}`}
          className="text-muted transition-colors hover:text-primary"
        >
          {business.email}
        </a>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-ink">Our Address</h2>
      <p className="mt-3 text-muted">
        Owner-operated in Auckland since 1975. Get in touch for expert advice,
        installation and service — we&rsquo;re happy to help.
      </p>

      <ul className="mt-8 space-y-6">
        {rows.map((row) => (
          <li key={row.label} className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cta/10 text-cta">
              <Icon name={row.icon} className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-semibold text-ink">
                {row.label} :
              </span>
              <span className="mt-1 block">{row.content}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
