import { blogs, getNextId } from "../models/blogModel.js";

// Get all blogs
export const getAllBlogs = (req, res) => {
    res.status(200).json(blogs);
};

// Get one blog by ID
export const getBlogById = (req, res) => {
    const id = Number(req.params.id);

    const blog = blogs.find((item) => item.id === id);

    if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    res.status(200).json(blog);
};

// Create a blog
export const createBlog = (req, res) => {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({
            message: "Title, content and author are required"
        });
    }

    const newBlog = {
        id: getNextId(),
        title,
        content,
        author
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog created successfully",
        blog: newBlog
    });
};

// Update a blog
export const updateBlog = (req, res) => {
    const id = Number(req.params.id);

    const blog = blogs.find((item) => item.id === id);

    if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    const { title, content, author } = req.body;

    if (title !== undefined) blog.title = title;
    if (content !== undefined) blog.content = content;
    if (author !== undefined) blog.author = author;

    res.status(200).json({
        message: "Blog updated successfully",
        blog
    });
};

// Delete a blog
export const deleteBlog = (req, res) => {
    const id = Number(req.params.id);

    const index = blogs.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    blogs.splice(index, 1);

    res.status(200).json({
        message: "Blog deleted successfully"
    });
};