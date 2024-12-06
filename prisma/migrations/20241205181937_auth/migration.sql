-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_previousNodeId_fkey";

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_previousNodeId_fkey" FOREIGN KEY ("previousNodeId") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;
