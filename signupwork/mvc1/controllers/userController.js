import {users} from "../models/userModel.js";
export const signuphandler=(req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("username and password are required")
    }

    const exitUser = users.find((user) => user.username === username)

    if (exitUser) {
        return res.status(400).send("already exit")
    }
    users.push({username, password});

    res.status(201).send("signup successfully");
};
export const signuphandler1=(req,res)=>{
    res.json(users);
};
