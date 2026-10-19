// signuprout.js
import express from "express";

export const signupRouter=express.Router();
export const users=[];
signupRouter.post("/", (req, res) => {
    const { username, password } = req.body
    

    if (!username || !password) {
        return res.status(400).send("username and password are required")
    }

    const existingUser = users.find(
        (user) => user.username === username
    );

    if (existingUser) {
        return res.status(400).send("user already exists")
    }

    users.push({ username, password })


    res.status(201).send("signup successfully")
});




