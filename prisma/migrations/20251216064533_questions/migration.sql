-- CreateTable
CREATE TABLE `qz_categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `qz_categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `qz_questions` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(8000) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,
    `difficulty` VARCHAR(20) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `points` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `qz_options` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(4000) NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `qz_questions` ADD CONSTRAINT `qz_questions_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `qz_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `qz_options` ADD CONSTRAINT `qz_options_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `qz_questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
