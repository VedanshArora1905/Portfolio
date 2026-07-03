"use client";

import { protectedImageUrl, type ProtectedImageFile } from "@/lib/protected-media";

type ProtectedImageProps = {
  file: ProtectedImageFile;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ProtectedImage({
  file,
  alt,
  className = "object-cover object-top",
  priority = false,
}: ProtectedImageProps) {
  return (
    <div
      className="protected-image relative w-full h-full"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={protectedImageUrl(file)}
        alt={alt}
        draggable={false}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`absolute inset-0 w-full h-full select-none ${className}`}
      />
      <div className="protected-image-shield absolute inset-0 z-10" aria-hidden />
    </div>
  );
}
