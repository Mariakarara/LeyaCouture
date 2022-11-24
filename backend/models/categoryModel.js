import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/*model category {
  id          Int       @id
  Robes       String?   @db.VarChar(255)
  Accessoires String?   @db.VarChar(255)
  product     product[]
}*/
async function main() {
  const category = await prisma.category.create({
    data: {
      Robes: "Petites filles",
      Accessoires: "Trousses",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default category;
