
import express from "express";
import { loginhandler } from "../controllers/loginControlers.js";
export const users = [
    {
        username: "anu",
        password: "1234"
    },
    {
        username: "sara",
        password: "5678"
    }
];
export const loginRouter = express.Router();


loginRouter.post("/", loginhandler);


