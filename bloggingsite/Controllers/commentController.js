import { users } from "../Model/userModel.js";
import { blogs } from "../Model/blogModel.js";
import { comments } from "../Model/commentModel.js";
export const getComments = (req, res) => {
  const blogId = Number(req.params.blogId);

  if (!blogs.some((b) => b.id === blogId)) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(comments.filter((c) => c.blogId === blogId));
};

export const addComment = (req, res) => {
  const blogId = Number(req.params.blogId);
  const { content } = req.body;

  if (!blogs.some((b) => b.id === blogId)) {
    return res.status(404).json({ message: "Blog not found" });
  }

  if (typeof content !== "string" || !content.trim()) {
    return res.status(400).json({ message: "Comment is required" });
  }

  const comment = {
    id: createCommentId(),
    blogId,
    authorId: req.user.id,
    author: req.user.username,
    content: content.trim(),
    createdAt: new Date().toISOString()
  };

  comments.push(comment);
  res.status(201).json({ message: "Comment added", comment });
};

export const deleteComment = (req, res) => {
  const index = comments.findIndex(
    (c) => c.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Comment not found" });
  }

  const comment = comments[index];

  if (comment.authorId !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({
      message: "Not allowed to delete this comment"
    });
  }

  comments.splice(index, 1);
  res.json({ message: "Comment deleted" });
};