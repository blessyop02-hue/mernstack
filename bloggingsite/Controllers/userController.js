
import bcrypt from "bcryptjs";
import { users, getNextUserId } from "../Model/userModel.js";

const publicUser = (user) => ({
  id: user.id,
  username: user.username,
  email: user.email,
  role: user.role
});

// Register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username?.trim() || !email?.trim() || !password) {
      return res.status(400).json({
        message: "Username, email and password are required"
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must contain at least 8 characters"
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((u) => u.email === normalizedEmail)) {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    const user = {
      id: getNextUserId(),
      username: username.trim(),
      email: normalizedEmail,
      password: await bcrypt.hash(password, 10),
      role: "user"
    };

    users.push(user);

    return res.status(201).json({
      message: "Registration successful",
      user: publicUser(user)
    });
  } catch (error) {
    return res.status(500).json({
      message: "Registration failed"
    });
  }
};

// Login without JWT
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = users.find(
      (u) => u.email === email.trim().toLowerCase()
    );

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user: publicUser(user)
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed"
    });
  }
};
