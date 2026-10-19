export function middlewareA(req, res, next) {
    console.log("method:", req.method)
    console.log("url:", req.url)
    next()
}