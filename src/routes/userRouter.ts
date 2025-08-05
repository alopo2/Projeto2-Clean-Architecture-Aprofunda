import express from "express";
import { welcomeUser, createUser, getUserById, loginUser, getMe, listUsers } from '../controllers/userController';
import { autenticar } from "../shared/middlewares/authMiddlewares";


const userRouter = express.Router();

userRouter.get("/welcomeUser", welcomeUser);

userRouter.get("/user/:id", autenticar, getUserById);

userRouter.get("/users", listUsers)

userRouter.post("/user", createUser);

userRouter.post("/login", loginUser);

userRouter.get("/me", autenticar, getMe);

export default userRouter;