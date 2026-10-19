// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end("hello wold");
// })
// server.listen(3000,()=>{
//     console.log("server is running on  http://:localhost:3000");
// });

const http=require("http");
const server=http.createServer((req,res)=>{
    res.setHeader("content-type","application/json");
    const user={
        id: 1,
        name:"john",
        age:21
    };
    res.end(JSON.stringify(user));
})
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})
