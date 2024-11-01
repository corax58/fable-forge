/*
  Warnings:

  - You are about to drop the column `imageLink` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the `_NextRelation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `storyId` to the `Node` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_NextRelation" DROP CONSTRAINT "_NextRelation_A_fkey";

-- DropForeignKey
ALTER TABLE "_NextRelation" DROP CONSTRAINT "_NextRelation_B_fkey";

-- AlterTable
ALTER TABLE "Node" ADD COLUMN     "firstNode" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "previousNodeId" TEXT,
ADD COLUMN     "storyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "imageLink",
ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "primaryColor" DROP NOT NULL,
ALTER COLUMN "secondaryColor" DROP NOT NULL;

-- DropTable
DROP TABLE "_NextRelation";

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_previousNodeId_fkey" FOREIGN KEY ("previousNodeId") REFERENCES "Node"("id") ON DELETE SET NULL ON UPDATE CASCADE;
