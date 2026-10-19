import express from "express";
import { middlewareA } from "./middlewares/middleware.js";
import { signupRouter } from "./routs/sigupRouts.js";
const app = express();
const port = 3000;


app.use(middlewareA);
app.use(express.json());

app.use("/signup",signupRouter);


app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});




