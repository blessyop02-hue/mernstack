import express from "express";
import { userRouter } from "./userrout.js"
import { cartRouter } from "./cart.js"

const app=express()
app.use(express.json())


app.get("/users",userRouter)
app.get("/cart",cartRouter)

app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
