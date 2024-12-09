import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { storySchema } from "../../schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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
  const session = await auth.api.getSession({
    headers: headers(),
  });

  try {
    let Story;
    if (session) {
      Story = await prisma.story.findFirst({
        where: {
          id: params.storyId,
        },
        include: {
          bookmarks: {
            where: {
              userId: session.user.id,
            },
          },
          nodes: {
            where: {
              firstNode: true,
            },
          },
        },
      });
    } else {
      Story = await prisma.story.findFirst({
        where: {
          id: params.storyId,
        },
        include: {
          nodes: {
            where: {
              firstNode: true,
            },
          },
        },
      });
    }

    if (!Story) return NextResponse.json("Invalid story", { status: 404 });

    return NextResponse.json(Story, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error something went wrong " },
      { status: 500 }
    );
  }
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
