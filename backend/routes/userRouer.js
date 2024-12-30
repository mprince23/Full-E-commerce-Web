import express from "express";
import { userList, userLogin, userRegister } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/userregister", userRegister);
userRouter.post("/userlogin", userLogin);
userRouter.get("/getuser", userList);

export default userRouter;
