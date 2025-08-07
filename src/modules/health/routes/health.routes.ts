import { Router } from "express";
import { success } from "../../../shared/utils/response.js";
import { ROUTES } from "../../../shared/constants/routes.js";

const router = Router();

// You can use the route constant to register the endpoint
router.get("/", (req, res) => {
  res.status(200).json(success(200, { message: "Server is healthy" }, 1, 1));
});

export default router;
