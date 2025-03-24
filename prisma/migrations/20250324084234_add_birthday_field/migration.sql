/*
  Warnings:

  - Changed the type of `sex` on the `Management` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employees" ADD COLUMN     "birthday" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Management" ADD COLUMN     "birthday" TIMESTAMP(3),
DROP COLUMN "sex",
ADD COLUMN     "sex" "UserSex" NOT NULL;
