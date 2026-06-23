"use client";

import { useState } from "react";
import Image from "next/image";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
};

/**
 * Lightweight click-to-play YouTube embed. Shows a thumbnail + play button and
 * only loads the (privacy-friendly youtube-nocookie) player on click — no
 * third-party JS on initial page load, protecting Core Web Vitals.
 */
export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-md shadow-card">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-md shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Image
        src={thumb}
        onError={() =>
          setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
        }
        alt=""
        fill
        sizes="(max-width: 992px) 100vw, 50vw"
        className="object-cover"
      />
      <span
        className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35"
        aria-hidden="true"
      />
      <span
        className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cta text-white shadow-card transition-transform group-hover:scale-110"
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
