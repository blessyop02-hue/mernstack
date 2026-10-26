import express from "express";
import {
  getCategoriesId,
  createCategory,
  deleteCategory
} from "../controllers/categoryController.js";
import { protect } from "../middlewares/userMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/", getCategoriesId);
router.post("/", protect, adminOnly, createCategory);
router.delete("/:id", protect, adminOnly, deleteCategory);

export default router;