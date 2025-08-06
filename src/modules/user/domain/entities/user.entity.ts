// domain/entities/user.entity.ts

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  profileImageUrl?: string; // optional field
  createdAt: Date;
  updatedAt: Date;
}
