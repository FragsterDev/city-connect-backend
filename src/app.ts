import express from "express";
import routes from "./config/routes/routes-index.js";
import { ROUTES } from "./shared/constants/routes.js";

import { error } from "./shared/utils/response.js";

const app = express();
app.use(express.json());

app.use(ROUTES.BASE, routes); // this will prefix all health routes with /api/v1

//404 fallback
app.use((req, res) => {
  res.status(404).json(error(404, "Route not found"));
});

export default app;
