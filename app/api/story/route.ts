import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { storySchema } from "../schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    return NextResponse.json({ Error: "Unauthorized" }, { status: 401 });
  }
  const data = await request.json();
  const validation = storySchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.message },
      { status: 400 }
    );
  }

  try {
    const story = await prisma.story.create({
      data: { ...data, authorId: session.user.id },
    });
    return NextResponse.json({ story }, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 404 });
  }
}
