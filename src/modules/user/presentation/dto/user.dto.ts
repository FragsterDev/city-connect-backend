// src/presentation/dto/create-user-request.dto.ts
import { z } from "zod";

export const CreateUserRequestDto = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  city: z.string().min(1),
  password: z.string().min(6),
  profileImageUrl: z.string().url().optional(),
});
