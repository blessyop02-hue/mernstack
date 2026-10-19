// import express from "express";
// const app=express()
// const port=3000;

// function myMiddleware(req, res, next) {
//     console.log("method:", req.method)
//     console.log("url:", req.url)
//     next();

// }
// app.use(myMiddleware)

// app.get("/",(req,res)=>{
//     res.send("home page");
// });
// app.get("/about",(req,res)=>{
//     res.send("about page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("contact page");
// });
// app.listen(port,()=>{
//     console.log(`server running on http://localhost:${port}`);
// })

// work2

// import express from "express";
// import morgan from "morgan";
// const app=express()
// const port=3000;

// function myMiddleware(req, res, next) {
//     console.log("method:", req.method)
//     console.log("url:", req.url)
//     next();

// }
// app.use(express.json());
// app.use(morgan("dev"));
// app.post("/login",(req,res,next)=>{
//     const{ username,password}=req.body;
//     console.log("hai")
//     if(!username||!password){
//         const error=new error("username and password are required");
//         error.status=400;
//         return next(error);
//     }
    
//     if(username ==="user" && password==="1234"){
//          return res.send("login successful");
//          console.log("hai")

//     }
       

// const err=new error("invalid username or password");
// err.status=401;
// next(err);
// })
// app.use((err,req,res,next)=>{
//     res.status(err.status||500).send(err.message);
// });
// app.listen(port,()=>{
//     console.log(`server running at http://localhost:${port}`);
// });


// correct
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function myMiddleware(req, res, next) {
    console.log("method:", req.method);
    console.log("url:", req.url);
    next();
}

app.use(express.json());
app.use(myMiddleware);
app.use(morgan("dev"));

app.post("/login", (req, res, next) => {
    const { username, password } = req.body;

    console.log("hai");

    if (!username || !password) {
        const error = new Error("username and password are required");
        error.status = 400;
        return next(error);
    }

    if (username === "user" && password === "1234") {
        return res.send("login successful");
    }

    const err = new Error("invalid username or password");
    err.status = 401;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
