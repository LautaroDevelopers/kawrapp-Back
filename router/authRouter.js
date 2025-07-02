import { Router } from "express";
const authRouter = Router();
import { getAllUsers, getUserById } from "../controllers/authController.js";

authRouter.get("/", getAllUsers);
authRouter.get("/:id", getUserById);

export default authRouter;