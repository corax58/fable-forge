import { NextRequest, NextResponse } from "next/server";
import { nodeSchema } from "../schema";
import prisma from "@/prisma/db";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const validation = nodeSchema.safeParse(data);

  if (validation.error) {
    return NextResponse.json({ error: validation.error });
  }

  try {
    const node = await prisma.node.create({
      data,
    });

    return NextResponse.json({ node }, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 404 });
  }
}
