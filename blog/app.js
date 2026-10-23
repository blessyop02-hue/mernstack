import express from "express";
import { blogRouter } from "./routes/blogRoutes.js"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Blog API");
});

app.use("/blogs", blogRouter);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});