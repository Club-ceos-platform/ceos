/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Member`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastName` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `linkedInUrl` VARCHAR(191) NOT NULL,
    `jobTitle` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `commercialName` VARCHAR(191) NOT NULL,
    `companyCountry` VARCHAR(191) NOT NULL,
    `companyCity` VARCHAR(191) NOT NULL,
    `companyWebsite` VARCHAR(191) NOT NULL,
    `companyLinkedInPage` VARCHAR(191) NOT NULL,
    `companyPhoneNumber` VARCHAR(191) NOT NULL,
    `revenue` DOUBLE NOT NULL,
    `revenueFile` VARCHAR(191) NULL,
    `isValidatedByAdmin` BOOLEAN NOT NULL DEFAULT false,
    `paymentUrl` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `hasPaid` BOOLEAN NOT NULL DEFAULT false,
    `role` ENUM('ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
