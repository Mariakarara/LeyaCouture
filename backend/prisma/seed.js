import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/*model category {
  id          Int       @id
  Robes       String?   @db.VarChar(255)
  Accessoires String?   @db.VarChar(255)
  product     product[]
}*/
async function main() {
  const categoryTestData = await prisma.category.upsert({
    where: { Robes: "Petites filles", Accessoires: "Trousses" },
    update: {},
    create: {
      Robes: "Petites filles",
      Accessoires: "Trousses",
    },
  });
  console.log(categoryTestData);
}
main()
  .then(async (e) => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
