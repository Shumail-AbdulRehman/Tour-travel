"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroBackgroundMedia({ imageSrc, imageAlt, videoSrc, priority = false }) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData === true;
    const isSmallScreen = window.matchMedia("(max-width: 639px)").matches;

    if (prefersReducedMotion || saveData) {
      return;
    }

    const startVideo = () => setShouldPlayVideo(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(startVideo, { timeout: isSmallScreen ? 1800 : 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(startVideo, isSmallScreen ? 900 : 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        quality={72}
        className="object-cover"
      />
      {shouldPlayVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={imageSrc}
          aria-hidden="true"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
