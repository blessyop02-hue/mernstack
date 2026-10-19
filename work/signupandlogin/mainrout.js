// mainrout.js
import express from 'express';
import { signupRouter } from './siguprout.js';
import { loginRouter } from './loginrout.js';

const app=express()

function middlewareA(req, res, next) {
    console.log("method:", req.method)
    console.log("url:", req.url)
    next()
}
app.use(middlewareA)
app.use(express.json());


app.use("/signup",signupRouter);
app.use("/login",loginRouter);

app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});





