import { NextResponse } from "next/server";

const STATS_URL = process.env.STATS_URL || "http://13.57.134.240:9090/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(STATS_URL, {
      signal: AbortSignal.timeout(3000),
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ geo: 0, hiring: 0, vanilla: 0 });
  }
}
// Force redeploy Thu Mar 12 02:17:28 PDT 2026
