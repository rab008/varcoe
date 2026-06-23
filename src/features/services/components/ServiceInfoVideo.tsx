import { Icon } from "@/components/ui/Icon";
import { YouTubeFacade } from "@/features/home/components/YouTubeFacade";
import type { ServiceDetail } from "@/features/services/services-data";

/**
 * "What's involved" block: heading + lead paragraph + an arrow bullet list
 * (left) beside a click-to-play video (right). Driven by `whyList`; the video
 * uses the lightweight `YouTubeFacade` (the only client island here).
 */
export function ServiceInfoVideo({
  whyList,
  videoId,
  serviceTitle,
}: {
  whyList: NonNullable<ServiceDetail["whyList"]>;
  videoId?: string;
  serviceTitle: string;
}) {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold text-ink">{whyList.title}</h2>
        {whyList.lead && <p className="mt-3 text-muted">{whyList.lead}</p>}
        <ul className="mt-6 space-y-3">
          {whyList.items.map((item) => (
            <li key={item.text} className="flex items-start gap-3">
              <Icon
                name="check"
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="text-muted">
                {item.label && (
                  <span className="font-semibold text-ink">{item.label}: </span>
                )}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {videoId && (
        <YouTubeFacade videoId={videoId} title={`${serviceTitle} — Varcoe`} />
      )}
    </section>
  );
}
