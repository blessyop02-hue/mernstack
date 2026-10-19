import express from "express";
export const cartRouter=express.Router();

cartRouter.get("/",function(req,res){
    res.send("all cart");
})

cartRouter.post("/:id",function(req,res){
    res.send("add cart");
})

cartRouter.put("/",function(req,res){
    res.send("update cart");
})

cartRouter.delete("/:id",function(req,res){
    res.send("delete cart");
})