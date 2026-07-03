import { readFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { isProtectedImage } from "@/lib/protected-media";

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;

  if (!isProtectedImage(file)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const host = request.headers.get("host");
  const referer = request.headers.get("referer");
  if (referer && host && !referer.includes(host)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const filePath = path.join(process.cwd(), "assets", "images", file);
    const data = await readFile(filePath);
    const ext = path.extname(file).toLowerCase();

    return new NextResponse(data, {
      headers: {
        "Content-Type": MIME_TYPES[ext] ?? "application/octet-stream",
        "Content-Disposition": "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
