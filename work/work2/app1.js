import express from "express";
import loginRouter from "./routes/loginRoute.js";

import { middlewareA } from "./middlewre/middlewre.js";


const app = express();

app.use(express.json());

app.use("/login", loginRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});