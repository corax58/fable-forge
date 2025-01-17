import { auth } from "@/lib/auth";
import prisma from "@/prisma/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    return NextResponse.json({ Error: "Unauthorized" }, { status: 401 });
  }

  try {
    const Bookmarks = await prisma.bookmark.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        story: {
          include: {
            author: true,
            bookmarks: true,
          },
        },
      },
    });
    const bookmarkedStories = Bookmarks.map((bookmark) => bookmark.story);

    return NextResponse.json(bookmarkedStories, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { Error: "Something went wrong" },
      { status: 500 }
    );
  }
}
