import express from "express";
import authUser from "../middleware/authMiddlewares.js";
import { getUserProfile } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", authUser, getUserProfile);

export default userRouter;
