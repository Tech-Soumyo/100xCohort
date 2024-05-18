import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  userName: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: userName,
      passWord: password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      passWord: true,
    },
  });
  console.log(res);
}

insertUser("soumyo1.tech.deep@gmail.com", "753896", "Soumyo", "Deep");
