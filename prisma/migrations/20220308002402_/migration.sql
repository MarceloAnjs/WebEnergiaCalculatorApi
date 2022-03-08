/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `equipment` DROP FOREIGN KEY `equipment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `history` DROP FOREIGN KEY `history_userId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`email`);

-- AddForeignKey
ALTER TABLE `equipment` ADD CONSTRAINT `equipment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
