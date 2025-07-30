import express from "express";
import { welcomeUser, createUser } from '../controllers/userController';


const userRouter = express.Router();

userRouter.get("/welcomeUser", welcomeUser);

userRouter.post("/user", createUser);


export default userRouter;