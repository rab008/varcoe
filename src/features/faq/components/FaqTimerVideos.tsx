import { YouTubeFacade } from "@/features/home/components/YouTubeFacade";
import type { TimerVideo } from "@/features/faq/faq-content";

/**
 * "Setting your heat pump timer" video grid. Each card uses the lightweight
 * click-to-play `YouTubeFacade` (no third-party JS until the user clicks).
 */
export function FaqTimerVideos({ videos }: { videos: readonly TimerVideo[] }) {
  return (
    <ul className="grid gap-8 md:grid-cols-3">
      {videos.map((video) => (
        <li key={video.videoId} className="flex flex-col">
          <YouTubeFacade
            videoId={video.videoId}
            title={`${video.brand} — how to set the timer`}
          />
          <h3 className="mt-4 font-semibold text-ink">{video.brand}</h3>
          <p className="mt-1 text-sm text-muted">{video.description}</p>
        </li>
      ))}
    </ul>
  );
}
