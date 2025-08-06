import { User } from "../entities/user.entity.js";

export interface IUserRepository {
  createUser(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
}
