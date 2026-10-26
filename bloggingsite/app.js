
import express from "express";

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Blog Website API is running without MongoDB"
    });
});

// Connect routes
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/admin", adminRoutes);

// If route does not exist
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Start server
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
