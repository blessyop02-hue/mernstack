import { blogs, createBlogId } from "../Model/blogModel.js";
import { comments } from "../Model/commentModel.js";



export const getBlogs = (req, res) => {
  let result = [...blogs];

  if (req.query.q) {
    const q = req.query.q.toLowerCase();

    result = result.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.content.toLowerCase().includes(q)
    );
  }

  if (req.query.category) {
    result = result.filter(
      (b) => b.category.toLowerCase() ===
        req.query.category.toLowerCase()
    );
  }

  res.json(result);
};

// find blog

export const getBlogById = (req, res) => {
  const blog = blogs.find((b) => b.id === Number(req.params.id));

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};

// create blog
export const createBlog = (req, res) => {
  const { title, content, image = "", category = "General" } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({
      message: "Title and content are required"
    });
  }

  const blog = {
    id: createBlogId(),
    title: title.trim(),
    content: content.trim(),
    image,
    category,
    authorId: req.user.id,
    author: req.user.username,
    createdAt: new Date().toISOString()
  };

  blogs.push(blog);
  res.status(201).json({ message: "Blog created", blog });
};

// update blog
export const updateBlog = (req, res) => {
  const blog = blogs.find((b) => b.id === Number(req.params.id));

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  if (blog.authorId !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not allowed to edit this blog" });
  }

  const { title, content, image, category } = req.body;

  if (title !== undefined) {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Invalid title" });
    }
    blog.title = title.trim();
  }

  if (content !== undefined) {
    if (typeof content !== "string" || !content.trim()) {
      return res.status(400).json({ message: "Invalid content" });
    }
    blog.content = content.trim();
  }

  if (image !== undefined) blog.image = image;
  if (category !== undefined) blog.category = category;

  res.json({ message: "Blog updated", blog });
};

// delete blog

export const deleteBlog = (req, res) => {
  const index = blogs.findIndex((b) => b.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const blog = blogs[index];

  if (blog.authorId !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not allowed to delete this blog" });
  }

  blogs.splice(index, 1);

  // Remove comments belonging to the deleted blog.
  for (let i = comments.length - 1; i >= 0; i--) {
    if (comments[i].blogId === blog.id) comments.splice(i, 1);
  }

  res.json({ message: "Blog deleted" });
};