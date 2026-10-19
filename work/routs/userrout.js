import express from "express"
export const userRouter=express.Router()

userRouter.get("/users",function(req,res)
{
    res.send("all users")
})
userRouter.get("/users/:id",function(req,res)
{
    res.send("user")
})
userRouter.post("/users",function(req,res)
{
    res.send("create users")
})
userRouter.put("/users",function(req,res)
{
    res.send("update users")
})
userRouter.delete("/users",function(req,res)
{
    res.send("delete users")
})