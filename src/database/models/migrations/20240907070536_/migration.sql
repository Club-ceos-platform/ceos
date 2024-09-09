-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `pays` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `urlLinkedIn` VARCHAR(191) NOT NULL,
    `posteOccupe` VARCHAR(191) NOT NULL,
    `raisonSociale` VARCHAR(191) NOT NULL,
    `nomCommercial` VARCHAR(191) NOT NULL,
    `paysEntreprise` VARCHAR(191) NOT NULL,
    `villeEntreprise` VARCHAR(191) NOT NULL,
    `siteInternetEntreprise` VARCHAR(191) NOT NULL,
    `pageLinkedInEntreprise` VARCHAR(191) NOT NULL,
    `telephoneEntreprise` VARCHAR(191) NOT NULL,
    `chiffreAffaire` DOUBLE NOT NULL,
    `fichierChiffreAffaire` VARCHAR(191) NULL,
    `estValide` BOOLEAN NOT NULL DEFAULT false,
    `urlPaiement` VARCHAR(191) NULL,
    `motDePasse` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'MEMBER') NOT NULL DEFAULT 'MEMBER',

    UNIQUE INDEX `Member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
