import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

async function fetchQueries(query: any) {
  return prisma.node.findFirst({
    where: query,
    include: {
      nextNodes: true,
      story: {
        select: {
          primaryColor: true,
          secondaryColor: true,
        },
      },
    },
  });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { nodeId: string } }
) {
  try {
    const node = await prisma.node.findFirst({
      where: {
        id: params.nodeId,
      },
      include: {
        nextNodes: true,
        story: {
          select: {
            primaryColor: true,
            secondaryColor: true,
          },
        },
      },
    });

    if (!node) {
      return NextResponse.json({ error: "node not found" }, { status: 404 });
    }

    return NextResponse.json(node, { status: 200 });
  } catch (error) {}
}

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
