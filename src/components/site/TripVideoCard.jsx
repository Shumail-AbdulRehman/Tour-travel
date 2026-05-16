"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function TripVideoCard({ src, poster, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isPlaying || !videoRef.current) {
      return;
    }

    videoRef.current.play().catch(() => {});
  }, [isPlaying]);

  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-[0_24px_60px_-38px_rgba(9,20,40,0.38)] ring-1 ring-navy-200">
      <div className="relative aspect-video">
        {isPlaying ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full text-left"
            aria-label={`Play video: ${title}`}
          >
            <span className="absolute inset-0">
              <Image src={poster} alt="" fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover" />
            </span>
            <span className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/16" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-white text-navy-900 shadow-[0_18px_45px_rgba(9,20,40,0.35)] transition duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-7 w-7 fill-current">
                <path d="M8 6.8v10.4c0 .7.76 1.14 1.37.8l8.14-5.2a.94.94 0 0 0 0-1.6L9.37 6c-.61-.35-1.37.1-1.37.8Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
