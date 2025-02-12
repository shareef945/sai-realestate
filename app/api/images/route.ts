import { getVistaGrandeImages } from "@/lib/getImages.server";
import { NextResponse } from "next/server";

export async function GET() {
  const images = getVistaGrandeImages();
  return NextResponse.json({ images });
}
