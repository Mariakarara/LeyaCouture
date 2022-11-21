/*const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

main(async function main() {
  // ... you will write your Prisma Client queries here
  const allCategories = await prisma.category.findMany();
  console.log(allCategories);
})
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default prisma;*/
