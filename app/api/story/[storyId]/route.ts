import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { storySchema } from "../../schema";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { storyId: string } }
) {
  const story = await prisma.story.findUnique({
    where: {
      id: params.storyId,
    },
  });

  if (!story) return NextResponse.json("Invalid story", { status: 404 });

  await prisma.story.delete({
    where: {
      id: params.storyId,
    },
  });

  return NextResponse.json({});
}

export async function GET(
  request: NextRequest,
  { params }: { params: { storyId: string } }
) {
  console.log("the param func");
  const story = await prisma.story.findUnique({
    where: {
      id: params.storyId,
    },
  });

  if (!story) return NextResponse.json("Invalid story", { status: 404 });

  await prisma.story.delete({
    where: {
      id: params.storyId,
    },
  });

  return NextResponse.json({});
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { storyId: string } }
) {
  const data = await request.json();
  const validation = storySchema.safeParse(data);
  console.log(data);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.message },
      { status: 400 }
    );
  }
  const story = await prisma.story.findUnique({
    where: {
      id: params.storyId,
    },
  });

  if (!story) return NextResponse.json("Invalid story", { status: 404 });

  const updatedStory = await prisma.story.update({
    where: {
      id: params.storyId,
    },
    data,
  });

  return NextResponse.json({ updatedStory }, { status: 200 });
}
