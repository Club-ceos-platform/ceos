/*
  Warnings:

  - You are about to drop the column `revenueFile` on the `User` table. All the data in the column will be lost.
  - Added the required column `companyPostCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revenueFileUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `paymentUrl` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `revenueFile`,
    ADD COLUMN `companyPostCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `postCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `revenueFileUrl` VARCHAR(191) NOT NULL,
    MODIFY `paymentUrl` VARCHAR(191) NOT NULL;
