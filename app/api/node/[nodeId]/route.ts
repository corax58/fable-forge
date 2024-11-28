import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { nodeId: string } }
) {
  const story = await prisma.node.findUnique({
    where: {
      id: params.nodeId,
    },
  });

  if (!story) return NextResponse.json("Invalid node", { status: 404 });

  await prisma.node.delete({
    where: {
      id: params.nodeId,
    },
  });

  return NextResponse.json({});
}
