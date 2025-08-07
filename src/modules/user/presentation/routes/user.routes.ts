import { Router } from "express";
import { ROUTES } from "../../../../shared/constants/routes.js";
import { createUser } from "../controller/user.controller.js";

const router = Router();

// Register route with function directly
router.post(ROUTES.USERS.CREATE, createUser);

export default router;
