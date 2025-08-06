import { PrismaClient } from '@prisma/client';
import { User } from '../../domain/entities/user.entity.js';
import { IUserRepository } from '../../domain/repository/user.repository.js';

const prisma = new PrismaClient();

export class PrismaUserRepository implements IUserRepository {
  async createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        city: user.city,
        password: user.password,
        profileImage: user.profileImageUrl ?? null, // handle optional
      },
    });

    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      city: createdUser.city,
      password: createdUser.password,
      profileImageUrl: createdUser.profileImage ?? undefined,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.createdAt,
    };
  }
}
