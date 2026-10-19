
import express from "express"
import { homeHandler,viewproductByIdHandler,viewproductByidHandler,searchHandler, viewproductHandler } from "../Controllers/productController.js";


export const productRouter=express.Router();

productRouter.get("/",homeHandler)

productRouter.get("/view-product",viewproductHandler)

productRouter.get("/view-products/:id",viewproductByIdHandler)

productRouter.get("/view-product/:id",viewproductByidHandler)

productRouter.get("/search",searchHandler);







