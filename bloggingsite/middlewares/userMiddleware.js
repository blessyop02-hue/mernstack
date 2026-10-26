
import { users } from "../Model/userModel.js";

export const protect = (req, res, next) => {
  return res.status(501).json({
    message: "Authentication middleware is not configured yet"
  });
};
