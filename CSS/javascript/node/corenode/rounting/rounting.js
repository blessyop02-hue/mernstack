import http from "http";
const server=http.createServer((req,res)=>
{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/pain"});
        res.end("home page");
    }else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type": "text/pain"});
        res.end("about page")
    }else if(req.url==="/contact"){
        res.writeHead(200,{"Content-Type": "text/pain"});
        res.end("conatct us");
    }else{
        res.writeHead(404,{"Content-Type": "text/pain"});
        res.end("404 page not fonud");
    }
});
server.listen(7000,()=>{
    console.log("server running at http://localhost:7000");
})