import { Router } from "express";
import { ROUTES } from "../../shared/constants/routes.js";

import HealthRoute from "../../modules/health/routes/health.routes.js";
import UserRoutes from "../../modules/user/presentation/routes/user.routes.js";

const router = Router();

//wiring health route
router.use(ROUTES.HEALTH.ROOT, HealthRoute); // /api/v1/health

//wiring user route
router.use(ROUTES.USERS.ROOT, UserRoutes);

export default router;
