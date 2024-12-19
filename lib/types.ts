import prisma from "@/prisma/db";
import { Prisma } from "@prisma/client";
export type FetchedNodes = Prisma.NodeGetPayload<{
  include: {
    nextNodes: true;
    story: {
      select: {
        primaryColor: true;
        secondaryColor: true;
      };
    };
  };
}>;
export type FetchedStories = Prisma.StoryGetPayload<{
  include: {
    author: true;
    bookmarks: true;
  };
}>;
