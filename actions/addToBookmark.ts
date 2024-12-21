"use server";

import prisma from "@/prisma/db";

export async function addToBookmarks(userId: string, storyId: string) {
  const alreadyBookmarked = await prisma.bookmark.findFirst({
    where: {
      userId,
      storyId,
    },
  });
  if (alreadyBookmarked) {
    return { error: "Story already bookmarked" };
  }
  await prisma.bookmark.create({
    data: {
      storyId,
      userId,
    },
  });
  return;
}
