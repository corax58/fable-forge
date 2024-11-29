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

export async function POST(request: NextRequest, params: { nodeId: string }) {
  const data: { isFirstNode: boolean } = await request.json();

  const query = data.isFirstNode
    ? {
        storyId: params.nodeId,
        firstNode: false,
      }
    : {
        id: params.nodeId,
      };

  try {
    const node = await fetchQueries(query);

    if (!node) {
      if (data.isFirstNode) {
        return NextResponse.json(
          { message: "There is no first node." },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "Node not found" },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(node, { status: 200 });
  } catch (error) {
    console.log("Error fetching node:", error);
    return NextResponse.json({ error: "Error fetching node" }, { status: 500 });
  }
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
