import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { nodeSchema } from "../../schema";

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
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something happened" }, { status: 500 });
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

  const node = await prisma.node.delete({
    where: {
      id: params.nodeId,
    },
  });

  return NextResponse.json({ node }, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { nodeId: string } }
) {
  const nodeId = params.nodeId;
  const data = await request.json();
  const validation = nodeSchema.safeParse(data);

  if (validation.error) {
    console.log("error");
    console.log(validation.error);
    return NextResponse.json({ error: validation.error }, { status: 404 });
  }

  try {
    const node = await prisma.node.findFirst({
      where: {
        id: nodeId,
      },
    });
    if (!node)
      return NextResponse.json({ error: "node not found" }, { status: 404 });

    const editedNode = await prisma.node.update({
      where: {
        id: nodeId,
      },
      data,
    });

    return NextResponse.json(editedNode, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error occured" }, { status: 500 });
  }
}
