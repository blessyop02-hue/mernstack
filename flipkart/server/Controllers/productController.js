
import { products } from "../Models/productModel.js";

export const homeHandler=(req,res)=>{
    res.send("All products")
};

export const viewproductHandler=(req,res)=>{
    res.json(products);
};

export const viewproductByIdHandler=(req,res)=>{
    const id=Number(req.params.id);
    const product=products.find((item)=>item.id===id);
     
    if(!product){
       return res.status(404).send("student not found");
    }
    res.json(product);
}
export const viewproductByidHandler=(req,res)=>{
    const id=req.params.id;
    const product=products.find((item)=>item.id==id);
    
    if(!product){
        res.status(404).send("student not found");
    }
    res.json(product);
};

export const searchHandler=(req,res)=>{
    const query=req.query.q;
    if(!query){
        return res.status(400).send("please enter a search query");
    }
    const result=products.filter((item)=>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json(result);
};

