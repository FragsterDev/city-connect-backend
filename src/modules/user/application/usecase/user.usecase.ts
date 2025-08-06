import { IUserRepository } from "../../domain/repository/user.repository.js";
import { User } from "../../domain/entities/user.entity.js";
import { hashPassword } from "../../../../shared/utils/hash.js";

export class CreateUserUsecase {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    input: Omit<User, "id" | "createdAt" | "updatedAt">
  ): Promise<User> {
    const hashedPassword = hashPassword(input.password);

    const userToCreate = {
      ...input,
      password: hashPassword,
    };

    return this.userRepository.createUser(input);
  }
}
