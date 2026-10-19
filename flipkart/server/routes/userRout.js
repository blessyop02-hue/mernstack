
import express from "express";
import { loginhandler } from "../Controllers/userController.js";
import { getUserHandler, signuphandler } from "../Controllers/userController.js";


export const userRouter=express.Router()


userRouter.post("/", loginhandler);
userRouter.post("/", signuphandler)
userRouter.get("/",getUserHandler)
