
import { users } from "../Models/userModel.js";

// Signup handler
export const signuphandler = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const exitUser = users.find(
        (user) => user.username === username
    );

    if (exitUser) {
        return res.status(400).send("User already exists");
    }

    users.push({ username, password });

    res.status(201).send("Signup successful");
};

// Login handler
export const loginhandler = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const user = users.find(
        (user) => user.username === username
    );

    if (!user || user.password !== password) {
        return res.status(401).send("Invalid username or password");
    }

    res.status(200).send("Login successful");
};

// Get all users
export const getUserHandler = (req, res) => {
    res.json(users);
};
