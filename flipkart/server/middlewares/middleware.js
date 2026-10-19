export function middlewareA(req,res,next){
    console.log("url",req.url)
    console.log("mathod",req.method)
    next()
}
