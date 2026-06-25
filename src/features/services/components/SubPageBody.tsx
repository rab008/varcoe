import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/shared/Accordion";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";

type BodySection = {
  title: string;
  paragraphs?: string[];
  points?: { label?: string; text: string }[];
};

/**
 * Generic main-column body for service sub-pages: intro → prose/list sections →
 * FAQ accordion → enquiry form. Static Server Component, rendered inside the
 * `SubPageShell` main column (no Container of its own).
 */
export function SubPageBody({
  intro,
  sections,
  faqs,
  faqsTitle,
  formIntro,
}: {
  intro: string[];
  sections: BodySection[];
  faqs: { question: string; answer: string }[];
  faqsTitle: string;
  formIntro: string;
}) {
  return (
    <>
      <div className="space-y-4 text-lg text-muted">
        {intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.title} aria-label={section.title}>
            <h2 className="text-2xl font-bold text-ink">{section.title}</h2>
            {section.paragraphs && (
              <div className="mt-4 space-y-4 text-muted">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
            {section.points && section.points.length > 0 && (
              <ul className="mt-5 space-y-3">
                {section.points.map((point) => (
                  <li
                    key={point.text}
                    className="flex items-start gap-3 text-muted"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      {point.label && (
                        <span className="font-semibold text-ink">
                          {point.label}:{" "}
                        </span>
                      )}
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <Accordion items={faqs} title={faqsTitle} />

        <ServiceAppointmentForm
          eyebrow="Get in touch"
          heading="Request a Free Quote"
          intro={formIntro}
          note=""
        />
      </div>
    </>
  );
}
