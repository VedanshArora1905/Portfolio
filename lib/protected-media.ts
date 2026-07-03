export const PROTECTED_IMAGES = ["My.jpeg", "My11.jpg"] as const;

export type ProtectedImageFile = (typeof PROTECTED_IMAGES)[number];

export function isProtectedImage(file: string): file is ProtectedImageFile {
  return (PROTECTED_IMAGES as readonly string[]).includes(file);
}

export function protectedImageUrl(file: ProtectedImageFile) {
  return `/api/media/${encodeURIComponent(file)}`;
}
