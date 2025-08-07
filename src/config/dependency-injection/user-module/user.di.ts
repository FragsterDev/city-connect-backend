import { PrismaUserRepository } from "../../../modules/user/infrastructure/prisma/user.repository.js";
import { CreateUserUsecase } from "../../../modules/user/application/usecase/user.usecase.js";

const userRepository = new PrismaUserRepository();

const createUserUsecase = new CreateUserUsecase(userRepository);

export const UserDI = {
  createUserUsecase,
};
