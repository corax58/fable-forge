import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { storySchema } from "./schema";

export const GET = (request: NextRequest) => {
  return NextResponse.json({ message: "halloooo" }, { status: 200 });
};

export async function POST(request: NextRequest) {
  const data = await request.json();
  const validation = storySchema.safeParse(data);
  console.log(data);
  console.log("the validation result:", validation.success);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.message },
      { status: 400 }
    );
  }

  try {
    const story = await prisma.story.create({
      data,
    });

    return NextResponse.json({ story }, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 404 });
  }
}
