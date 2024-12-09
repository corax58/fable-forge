// app/actions/fetchData.ts
"use server";

import prisma from "@/prisma/db";

export async function fetchAllStories(userId?: string) {
  const Stories = await prisma.story.findMany({
    include: {
      author: true,
    },
  });
  return Stories;
}
