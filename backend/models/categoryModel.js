/*import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main() {
  const allCategory = await prisma.category.create({
    data: {
      Robes: "Petites filles",
      Accessoires: "Trousses",
    },
  });
  const post = await prisma.category.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(category);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });*/
