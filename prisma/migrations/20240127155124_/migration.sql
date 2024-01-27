/*
  Warnings:

  - You are about to drop the column `favourite` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Recipe` table. All the data in the column will be lost.
  - The `ingredients` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `instructions` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "favourite",
DROP COLUMN "notes",
ADD COLUMN     "description" TEXT,
DROP COLUMN "ingredients",
ADD COLUMN     "ingredients" TEXT[],
DROP COLUMN "instructions",
ADD COLUMN     "instructions" TEXT[];
