import express from "express";
import {
  getUsers,
  deleteUser
} from "../controllers/adminController.js";
import { protect } from "../middlewares/userMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/users", protect, adminOnly, getUsers);
router.delete("/users/:id", protect, adminOnly, deleteUser);

export default router;