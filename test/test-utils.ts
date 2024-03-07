import { prismaClient } from "../src/application/database";

export class UserTest {
  static async delete() {
    prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }
}
