import express from "express";

import { getAllBlogs, getBlogById, createBlog,updateBlog,deleteBlog } from "../controllers/blogController.js";

export const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogById);
blogRouter.post("/", createBlog);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);