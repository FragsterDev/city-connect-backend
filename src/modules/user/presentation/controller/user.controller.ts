// user.controller.ts

import { Request, Response } from "express";
import { CreateUserRequestDto } from "../dto/user.dto.js";
import { Dependency_Injection } from "../../../../config/dependency-injection/di-index.js";
import { success, error } from "../../../../shared/utils/response.js";

// Handles user creation
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Validate incoming request body using Zod DTO
    console.log("Incoming request body:", req.body);

    const parsedData = CreateUserRequestDto.parse(req.body);

    // Resolve use case from dependency injection container
    const createUserUsecase = Dependency_Injection.user.createUserUsecase;

    // Execute the use case logic
    const createdUser = await createUserUsecase.execute(parsedData);

    // Respond with success and created user data
    res.status(201).json(success(201, createdUser));
  } catch (err: any) {
    // Handle validation errors
    if (err?.name === "ZodError" && Array.isArray(err.errors)) {
      const messages = err.errors.map((e: any) => e.message).join(", ");
      res.status(400).json(error(400, messages));
      return;
    }

    // Handle unexpected server errors
    res.status(500).json(error(500, err.message || "Internal server error"));
  }
};
