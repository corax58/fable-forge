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
export type StoryWithAuthor = Prisma.StoryGetPayload<{
  include: {
    author: true;
  };
}>;
