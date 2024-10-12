import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return NextResponse.json({ message: "halloooo" }, { status: 200 });
};

export function POST(request: NextRequest) {
  const story = request.body;
  console.log(story);
  return NextResponse.json({ story }, { status: 200 });
}
