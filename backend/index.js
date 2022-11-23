import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const allCategories = await prisma.category.findMany();
  console.log(allCategories); // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$connect();
    process.exit(1);
  });
