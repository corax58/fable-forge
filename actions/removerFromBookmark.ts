"use server";

import prisma from "@/prisma/db";

export async function removeFromBookmark(userId: string, storyId: string) {
  const alreadyBookmarked = await prisma.bookmark.findFirst({
    where: {
      userId,
      storyId,
    },
  });
  if (!alreadyBookmarked) {
    return { error: "Story is not bookmarked" };
  }
  await prisma.bookmark.delete({
    where: {
      id: alreadyBookmarked.id,
    },
  });
  return;
}
