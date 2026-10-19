// rount parameter
// import express, { request, response } from "express"
// const app=express()
// const port=3000;

// // fake database
// const students=[
//     {
//         id:101,
//         name:"anu",
//         course:"mern"
//     },
//     {
//         id:102,
//         name:"sara",
//         course:"react"
//     },
//     {
//         id:103,
//         name:"john",
//         course:"mern"
//     }
// ];


// app.get("/",(req,res)=>{
//     res.send("hello express")
// });
// app.get("/view-student",(req,res)=>{
//     res.json(students);
// });
// // app.get("/about",(req,res)=>{
// //     res.send("about")
// // })
// app.get("/view-students/:id",(request,response)=>{
//     response.json(students);
// });
// app.get("/view-student/:id",(request,response)=>{
//     const id=request.params.id;
//     const student=students.find((student)=>student.id==id);
//     console.log("student",student);
//     if(!student){
//         response.status(404).send("student not found");
//     }
//     response.json(student);
// });
// app.listen(port,()=>{
//     console.log(`server running on port 3000 on http://localhost:${port}`)
// });

// query parameter

// import express, { request, response } from "express"
// const app=express()
// const port=3000;

// // fake database
// const students=[
//     {
//         id:101,
//         name:"anu",
//         course:"mern"
//     },
//     {
//         id:102,
//         name:"sara",
//         course:"react"
//     },
//     {
//         id:103,
//         name:"john",
//         course:"mern"
//     }
// ];


// app.get("/",(req,res)=>{
//     res.send("hello express")
// });
// app.get("/view-student",(req,res)=>{
//     res.json(students);
// });
// // app.get("/about",(req,res)=>{
// //     res.send("about")
// // })
// app.get("/view-students/:id",(request,response)=>{
//     response.json(students);
// });
// app.get("/view-student/:id",(request,response)=>{
//     const id=request.params.id;
//     const student=students.find((student)=>student.id==id);
//     console.log("student",student);
//     if(!student){
//         response.status(404).send("student not found");
//     }
//     response.json(student);
// });
// app.listen(port,()=>{
//     console.log(`server running on port 3000 on http://localhost:${port}`)
// });




//query parameter 

// import express from "express";
// const app=express()
// const port=3000;
// app.get("/search", (req, res) => {
//     res.send(req.query.q);
// });
// app.listen(port,()=>{
//     console.log(`server running on port 3000 on http://localhost:${port}`)
// });







// import express from "express";

// const app = express();

// const PORT = 3000;

// // Product data
// const products = [
//     { id: 1, name: "iPhone", price: 70000, category: "mobile" },
//     { id: 6, name: "iPhone", price: 90000, category: "mobile" },
//     { id: 2, name: "Samsung", price: 50000, category: "mobile" },
//     { id: 3, name: "Laptop", price: 60000, category: "electronics" },
//     { id: 4, name: "Headphones", price: 3000, category: "electronics" },
//     { id: 5, name: "Watch", price: 5000, category: "accessories" }
// ];


// app.get("/", (req, res) => {
//     res.send("Product API is running");
// });


// app.get("/products", (req, res) => {

//     const name = req.query.name;
//     if(!name){
//         return res.status(400).send("product is not")
//     }

//     const product = products.find(
//         (product) => product.name.toLowerCase() === name.toLowerCase()
//     );

//     if (!product) {
//         return res.status(404).send("Product not found");
//     }

//     res.json(product);
// });


// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });








// import express from "express";

// const app = express();

// const port= 3000;

// const products = [
//     { id: 1, name: "iPhone", price: 70000, category: "mobile" },
//     { id: 2, name: "Samsung", price: 50000, category: "mobile" },
//     { id: 3, name: "Laptop", price: 60000, category: "electronics" },
//     { id: 4, name: "Headphones", price: 3000, category: "electronics" },
//     { id: 5, name: "Watch", price: 5000, category: "accessories" }
// ];

// app.get("/", (req, res) => {
//     res.send("Product API is running");
// });

// app.get("/products", (req, res) => {

//     const id = req.query.id;
//     const name = req.query.name;

//     const product = products.find(
//         (product) =>
//             product.id == id &&
//             product.name.toLowerCase() === name.toLowerCase()
//     );

//     if (!product) {
//         return res.status(404).send("Product not found");
//     }

//     res.json(product);
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


// multiple query

// import express from "express";

// const app = express();

// const products = [
//     { id: 1, name: "iPhone", category: "mobile", price: 70000 },
//     { id: 2, name: "Samsung", category: "mobile", price: 50000 },
//     { id: 3, name: "Laptop", category: "electronics", price: 60000 }
// ];

// app.get("/products", (req, res) => {

//     const category = req.query.category;
//     const price = Number(req.query.price);

//     const product = products.find((item) => {
//         return item.category === category &&
//                item.price === price;
//     });

//     if (!product) {
//         return res.status(404).send("Product not found");
//     }

//     res.json(product);
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// import express from "express";

// const app = express();
// const port = 3000;

// // Fake product database
// const products = [
//     {
//         id: 101,
//         name: "iPhone",
//         price: 70000,
//         category: "mobile"
//     },
//     {
//         id: 102,
//         name: "Samsung",
//         price: 50000,
//         category: "mobile"
//     },
//     {
//         id: 103,
//         name: "Laptop",
//         price: 60000,
//         category: "electronics"
//     },
//     {
//         id: 104,
//         name: "Headphones",
//         price: 3000,
//         category: "electronics"
//     }
// ];

// app.get("/", (req, res) => {
//     res.send("Product API is running");
// });

// app.get("/products", (req, res) => {
//     res.json(products);
// });

// app.get("/product", (req, res) => {

//     const name = req.query.name;


//     if (!name) {
//         return res.status(400).send("Please provide product name");
//     }

//     const product = products.find(
//         (product) =>
//             product.name.toLowerCase() === name.toLowerCase()
//     );

//     if (!product) {
//         return res.status(404).send("Product not found");
//     }

//     res.json(product);
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });



// import express from "express";

// const app = express();

// const products = [
//     { id: 1, name: "iPhone", price: 70000 },
//     { id: 6, name: "iPhone", price: 90000 },
//     { id: 2, name: "Samsung", price: 50000 },
//     { id: 3, name: "Laptop", price: 60000 },
//     { id: 4, name: "Headphones", price: 3000 },
//     { id: 5, name: "Watch", price: 5000 }
// ];

// app.get("/search", (req, res) => {

//     const name = req.query.name;

//     const result = products.filter((product) =>
//         product.name.toLowerCase().includes(name.toLowerCase())
//     );

//     res.json(result);

// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });




//flipkart
// import express from "express"

// const app = express()
// const port=3000;


// app.get("/", (req, res) => {
//     res.send("Flipkart Home Page")
// })


// app.get("/products", (req, res) => {
//     res.send("All Products")
// })


// app.get("/products/:id", (req, res) => {
//     res.send("Product ID: " + req.params.id)
// })


// app.get("/categories", (req, res) => {
//     res.send("All Categories")
// })

// app.get("/categories/:name", (req, res) => {
//     res.send("Category: " + req.params.name)
// })


// app.get("/search", (req, res) => {
//     res.send("Search: " + req.query.name)
// })


// app.get("/cart", (req, res) => {
//     res.send("Cart")
// })


// app.get("/wishlist", (req, res) => {
//     res.send("Wishlist")
// })


// app.get("/orders", (req, res) => {
//     res.send("Orders")
// })


// app.post("/profile", (req, res) => {
//     res.send("Profile")
// })

// app.get("/checkout", (req, res) => {
//     res.send("Checkout")
// })


// app.post("/payment", (req, res) => {
//     res.send("Payment")
// })

// app.listen(port, () => {
//     console.log("Server running on port 3000  http://localhost:3000")
// })


// import express from "express";

// const app = express();

// const users = [
//     { username: "hasna", password: 234 }
// ];

// app.use(express.json());

// app.post("/signup", (req, res) => {

//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(404).send("username and password are required");
//     }

//     const existingUser = users.find(
//         (user) => user.username === username
//     );

//     if (existingUser) {
//         return res.status(400).send("user already exists");
//     }

//     users.push({ username, password });

//     console.log("users:", users);

//     res.status(201).send("signup successfully");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000 http://localhost:3000");
// });




// import express from "express"

// const app = express()

// const users = [
//     { username: "hasna", password: 234 },
//     { username: "anu", password: 123 }
// ]

// app.use(express.json())

// app.post("/login", (req, res) => {

//     const { username, password } = req.body

//     const user = users.find(
//         (user) => user.username === username && user.password === password
//     )

//     if (!user) {
//         return res.status(401).send("Invalid username or password")
//     }

//     res.send("Login successful")
// })

// app.listen(3000, () => {
//     console.log("Server running on port http://localhost:3000")
// })


// signup
import express, { json } from "express";
const app = express()
const port = 3000;
const users = [{
    "username": "amu",
    "password": 1234

}];
app.use(express.json())
app.get("/signup",(req,res)=>{

    const {username,password}=req.body
    
})


// query parameter
// import express from "express";

// const app = express();
// const port=3000;

// const students = [
//     { id: 101, name: "anu", course: "mern" },
//     { id: 102, name: "sara", course: "react" },
//     { id: 103, name: "john", course: "mern" }
// ];

// app.get("/student", (req, res) => {
//     const name = req.query.name;

//     const student = students.find(
//         s => s.name.toLowerCase() == name.toLowerCase()
//     );

//     if (!student) {
//         return res.status(404).send("Student not found");
//     }

//     res.json(student);
// });

// app.listen(3000, () => {
//     console.log("Server running on port  http://localhost:3000");
// });