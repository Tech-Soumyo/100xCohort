import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface updateUser {
  firstName: string;
  lastName: string;
}

async function updateUserDetails(
  userName: string,
  { firstName, lastName }: updateUser
) {
  const res = await prisma.user.update({
    where: { email: userName },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

updateUserDetails("soumyo1.tech.deep@gmail.com", {
  firstName: "Manipulator",
  lastName: "Extreme",
});
