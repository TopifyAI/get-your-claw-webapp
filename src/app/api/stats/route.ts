import { NextResponse } from "next/server";

const STATS_URL = process.env.STATS_URL || "http://13.57.134.240:9090/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    console.log("API route called, fetching from:", STATS_URL);
    
    const res = await fetch(STATS_URL, {
      signal: AbortSignal.timeout(3000),
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!res.ok) {
      console.error("Backend response not ok:", res.status, res.statusText);
      return NextResponse.json({ geo: 0, hiring: 0, vanilla: 0, suanming: 0, storygirl: 0 });
    }
    
    const data = await res.json();
    console.log("Backend data received:", data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ geo: 0, hiring: 0, vanilla: 0, suanming: 0, storygirl: 0 });
  }
}
