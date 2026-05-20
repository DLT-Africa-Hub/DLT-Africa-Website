"use client";

import Image from "next/image";
import { useState } from "react";

import { getPosterVideoSrc, isVideoUrl } from "./event.utils";

type EventPosterMediaProps = {
  src: string;
  alt: string;
  sizes: string;
  fallbackSrc?: string;
  priority?: boolean;
  className?: string;
};

export default function EventPosterMedia({
  src,
  alt,
  sizes,
  fallbackSrc,
  priority = false,
  className = "object-cover transition duration-700 group-hover:scale-110",
}: EventPosterMediaProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = isVideoUrl(src) && !videoFailed;
  const videoSrc = getPosterVideoSrc(src);
  const imageSrc =
    !showVideo && isVideoUrl(src) && fallbackSrc ? fallbackSrc : src;
  const isExternal = imageSrc.startsWith("http");

  if (showVideo) {
    return (
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className={`absolute inset-0 h-full w-full ${className}`}
        onError={() => setVideoFailed(true)}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      unoptimized={isExternal}
    />
  );
}
