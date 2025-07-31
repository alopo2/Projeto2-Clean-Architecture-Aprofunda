import express from "express";
import { welcomeUser, createUser, getUserById, loginUser } from '../controllers/userController';
import { autenticar } from "../shared/middlewares/authMiddlewares";


const userRouter = express.Router();

userRouter.get("/welcomeUser", welcomeUser);

userRouter.get("/user/:id", autenticar, getUserById);

userRouter.post("/user", createUser);

userRouter.post("/login", loginUser);

export default userRouter;