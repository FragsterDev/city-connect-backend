import express from "express";
import healthRoutes from "./modules/health/routes/health.routes.js";
import { ROUTES } from "./shared/constants/routes.js";

const app = express();
app.use(express.json());

app.use(ROUTES.BASE, healthRoutes); // this will prefix all health routes with /api/v1

export default app;
