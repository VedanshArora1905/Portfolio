"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGE_COLORS, PROJECT_IMAGES, type ImageVariant } from "@/lib/constants";

interface ProjectImageProps {
  variant: ImageVariant;
  alt: string;
  className?: string;
  aspectClass?: string;
}

export default function ProjectImage({
  variant,
  alt,
  className = "object-cover grayscale contrast-125",
  aspectClass = "",
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const src = PROJECT_IMAGES[variant];
  const fallbackColor = IMAGE_COLORS[variant];

  return (
    <div
      className={`protected-image relative w-full h-full overflow-hidden border-4 border-brutal-black bg-brutal-white ${aspectClass}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-brutal-black/40"
        style={{ backgroundColor: fallbackColor }}
        aria-hidden={!failed}
      >
        [ NO IMG ]
      </div>
      {!failed && (
        <Image
          alt={alt}
          className={`select-none ${className}`}
          src={src}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
        />
      )}
      <div className="protected-image-shield absolute inset-0 z-10" aria-hidden />
    </div>
  );
}
