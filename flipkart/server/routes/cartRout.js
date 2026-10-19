import express from "express";
import { allcarthandler,addcarthandler } from "../Controllers/cartController.js";
export const cartRouter=express.Router();

cartRouter.get("/",allcarthandler);
cartRouter.post("/",addcarthandler)
