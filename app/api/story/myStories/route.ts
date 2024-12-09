import { auth } from "@/lib/auth";
import prisma from "@/prisma/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session) {
    return NextResponse.json({ Error: "Unauthorized" }, { status: 401 });
  }

  try {
    const Stories = await prisma.story.findMany({
      where: {
        authorId: session.user.id,
      },
      include: { author: true },
    });

    return NextResponse.json(Stories, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { Error: "Something went wrong" },
      { status: 500 }
    );
  }
}
