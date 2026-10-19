// const http=require("http");
import http from "http"
const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{
            "Content-Type":"appliaction/json"
        });
        res.end(JSON.stringify({message:"home API"}));
        
        
    }
});
server.listen(4000,() => {
    console.log("http://localhost:4000");
});