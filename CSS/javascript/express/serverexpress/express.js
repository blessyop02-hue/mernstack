import { v4 as uuidv4 } from 'uuid';

const id=uuidv4(); 
console.log(`id is ${id}`);



// import express from "express"
// const app=express()
// app.get("/",(reg,res)=>{
//     res.send("hello express")
// })
// app.listen(3000,()=>{
//     console.log("server running on port 3000 on http://localhost:3000")
// })



import express from "express"
const app=express()
app.get("/",(reg,res)=>{
    res.send("hello express")
})
app.get("/about",(reg,res)=>{
    res.send("about express")
})
app.get("/contact",(reg,res)=>{
    res.send("contact us")
})
app.listen(3000,()=>{
    console.log("server running on port 3000 on http://localhost:3000")
})