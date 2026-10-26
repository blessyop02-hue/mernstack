import express from "express";
import {
  getComments,
  addComment,
  deleteComment
} from "../controllers/commentController.js";
import { protect } from "../middlewares/userMiddleware.js";

const router = express.Router();

router.get("/blog/:blogId", getComments);
router.post("/blog/:blogId", protect, addComment);
router.delete("/:id", protect, deleteComment);

export default router;