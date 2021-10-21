import prismaClient from "../prisma";

class ProfileUserService {
  async execute(user_id: any) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      }
    });
    return user;
  }
}

export { ProfileUserService };