// api/hello/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "안녕하세요! 이것은 GET 요청입니다",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({
    message: "POST 요청을 받았습니다.",
    receivedData: body,
  });
}
