-- DropIndex
DROP INDEX "public"."User_userKey_key";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "userKey" DROP NOT NULL;
