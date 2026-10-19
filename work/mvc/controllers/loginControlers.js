
import { users } from "../routes/userRoutes.js";
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
