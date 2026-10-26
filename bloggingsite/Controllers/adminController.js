import { users } from "../Model/userModel.js";
import { blogs } from "../Model/blogModel.js";
import { comments } from "../Model/commentModel.js";

export const getUsers = (req, res) => {
  const safeUsers = users.map(({ password, ...user }) => user);
  res.json(safeUsers);
};

export const deleteUser = (req, res) => {
  const id = Number(req.params.id);

  if (id === req.user.id) {
    return res.status(400).json({
      message: "You cannot delete your own admin account"
    });
  }

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  // Remove the deleted user's blogs and comments.
  const deletedBlogIds = blogs
    .filter((b) => b.authorId === id)
    .map((b) => b.id);

  for (let i = blogs.length - 1; i >= 0; i--) {
    if (blogs[i].authorId === id) blogs.splice(i, 1);
  }

  for (let i = comments.length - 1; i >= 0; i--) {
    if (
      comments[i].authorId === id ||
      deletedBlogIds.includes(comments[i].blogId)
    ) {
      comments.splice(i, 1);
    }
  }

  res.json({ message: "User and related content deleted" });
};