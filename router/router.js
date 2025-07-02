import { Router } from "express";
const router = Router();
import authRouter from "./authRouter.js";

// Define the base route for the API
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

router.use("/auth", authRouter);

export default router;