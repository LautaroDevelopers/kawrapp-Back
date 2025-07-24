import { Router } from "express";
const authRouter = Router();
import { getAllUsers, getUserById, createUser, loginUser } from "../controllers/authController.js";

authRouter.get("/", getAllUsers);
authRouter.get("/:id", getUserById);
authRouter.post("/create", createUser)
authRouter.post("/login", loginUser)

export default authRouter;