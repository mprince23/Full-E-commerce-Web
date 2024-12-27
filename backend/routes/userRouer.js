import express from "express";
import { userLogin, userRegister } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/userregister", userRegister);
userRouter.post("/userlogin", userLogin);

export default userRouter;
