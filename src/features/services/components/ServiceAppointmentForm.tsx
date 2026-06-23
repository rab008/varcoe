import { services } from "@/features/services/services-data";

type ServiceAppointmentFormProps = {
  defaultService?: string;
  /** Optional eyebrow above the heading (e.g. "Get in touch" on the contact page). */
  eyebrow?: string;
  /** Heading text (default "Make An Appointment"). */
  heading?: string;
  /** Lead paragraph under the heading. */
  intro?: string;
  /** Small note under the submit button. Pass "" to hide. */
  note?: string;
  /** Where the form posts (GET). Defaults to /contact. */
  action?: string;
  /**
   * Transparent variant: drops the solid white card background, border and
   * shadow so the form blends into a surrounding glass panel (used on the
   * homepage hero). Input fields keep their solid background for legibility.
   * Defaults to the solid card used on /contact and /services/[slug].
   */
  transparent?: boolean;
};

/**
 * Enquiry form — PRESENTATIONAL placeholder. There is no email provider wired
 * yet, so this is a native `<form>` that submits (GET) to `action`; it adds no
 * client JS and shows no false success. Inputs are fully labelled for
 * accessibility. Replace with a Server Action + email provider (e.g. Resend)
 * when the real enquiry flow is built. Reused on the Heat Pumps service page and
 * the Contact page (with different heading/eyebrow).
 */
export function ServiceAppointmentForm({
  defaultService,
  eyebrow,
  heading = "Make An Appointment",
  intro = "Send us a few details and our Auckland team will be in touch.",
  note = "You’ll be taken to our contact page to complete your enquiry.",
  action = "/contact",
  transparent = false,
}: ServiceAppointmentFormProps) {
  const fieldClass =
    "w-full rounded-md border border-border bg-surface px-4 py-3 text-ink placeholder:text-muted focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary";
  const formClass = transparent
    ? "mt-6 rounded-lg p-0"
    : "mt-6 rounded-lg border border-border bg-white p-6 shadow-card";

  return (
    <section aria-labelledby="appointment-heading">
      {eyebrow && (
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cta">
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-cta" />
          {eyebrow}
        </p>
      )}
      <h2 id="appointment-heading" className="mt-2 text-2xl font-bold text-ink">
        {heading}
      </h2>
      <p className="mt-2 text-sm text-muted">{intro}</p>

      <form action={action} method="get" className={formClass}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="sr-only">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your Name*"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="service" className="sr-only">
              Select service
            </label>
            <select
              id="service"
              name="service"
              defaultValue={defaultService ?? ""}
              className={fieldClass}
            >
              <option value="" disabled>
                Select Service
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your Mail*"
              className={fieldClass}
            />
          </div>

          <div className="sm:row-span-2">
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message.."
              className={`${fieldClass} h-full resize-y`}
            />
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone Number*"
              className={fieldClass}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-md bg-primary px-6 py-3.5 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Submit Now
        </button>
        {note && <p className="mt-3 text-center text-xs text-muted">{note}</p>}
      </form>
    </section>
  );
}
