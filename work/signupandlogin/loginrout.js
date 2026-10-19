// loginrout.js
import express from "express";
import { users } from "./siguprout.js";

export const loginRouter=express.Router();

loginRouter.post("/", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send(
            "username and password are required"
        );
    }

    const existingUser = users.find(
        (user) => user.username === username
    );

    if (!existingUser) {
        return res.status(401).send("user not found");
    }

    if (existingUser.password !== password) {
        return res.status(401).send("invalid password");
    }

    res.status(200).send("login successful");
});

