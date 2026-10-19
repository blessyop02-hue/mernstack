import express from "express";
import { signuphandler } from "../controllers/signupController.js";
import { signuphandler1 } from "../controllers/signupController.js";
export const signupRouter=express.Router()

signupRouter.post("/", signuphandler)
signupRouter.get("/",signuphandler1)

