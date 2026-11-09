/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Queue` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Queue" ADD COLUMN     "phoneNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Queue_phoneNumber_key" ON "Queue"("phoneNumber");
