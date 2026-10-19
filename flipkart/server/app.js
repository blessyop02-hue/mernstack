import express from "express";
import { middlewareA } from "./middlewares/middleware.js";
import { productRouter } from "./routes/productRout.js";
import { userRouter } from "./routes/userRout.js";
const app = express();

const port = 3000;


app.use(middlewareA);
app.use(express.json());

app.use("/signup",userRouter)
app.use("/login",userRouter)
app.use("/product",productRouter)



app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});




