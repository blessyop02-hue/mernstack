// get handler
import cart from "../Models/cartModel.js"

// add product
export const addcarthandler=(req,res)=>{

    const {id,name,price}=req.body

    if(!id||!name||!price)
    {
    
        return res.status(404).send("all details are required")
    }
    const product = {
        id,
        name,
        price,
        quantity
    };

    cart.push(product);

    res.staus(201).send("product added to successfully ")
}

// get all product
export const allcarthandler=(req,res)=>{
    res.json(cart)
}
