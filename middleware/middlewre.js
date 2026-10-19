// const express = require("express")

// const app = express()

// const users = []

// function middlewareA(req, res, next) {
//     console.log("method:", req.method)
//     console.log("url:", req.url)
//     next()
// }

// app.use(middlewareA)
// app.use(express.json())
// app.get("/", (req, res) => {
//     res.send("welcome to home page!")
// })

// app.post("/signup", (req, res) => {

//     const { username, password } = req.body
//     console.log("username:", username)
//     console.log("password:", password)
//     if (!username || !password) {
//         return res.status(400).send("username and password are required")
//     }

//     const existingUser = users.find(
//         (user) => user.username === username
//     )

//     if (existingUser) {
//         return res.status(400).send("user already exists")
//     }

//     users.push({ username, password })

//     console.log("users:", users)

//     res.status(201).send("signup successfully")
// })

// app.listen(3000, () => {
//     console.log("Server running on port 3000 http://localhost:3000")
// })




// signup and login

const express = require("express");

const app = express();
const port = 3000;

const users = [];

function middlewareA(req, res, next) {
    console.log("method:", req.method);
    console.log("url:", req.url);
    next();
}

app.use(middlewareA);
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to home page!");
});

// Signup route
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send(
            "username and password are required"
        );
    }

    const existingUser = users.find(
        (user) => user.username === username
    );

    if (existingUser) {
        return res.status(400).send("user already exists");
    }

    users.push({ username, password });

    console.log("users:", users);

    res.status(201).send("signup successfully");
});

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send(
            "username and password are required"
        );
    }

    const existingUser = users.find(
        (user) => user.username === username
    );

    if (!existingUser) {
        return res.status(401).send("user not found");
    }

    if (existingUser.password !== password) {
        return res.status(401).send("invalid password");
    }

    res.status(200).send("login successful");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```


// application level middleware

const express = require("express");
const app = express();

function middlewareA(req, res, next) {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
}

app.use(middlewareA);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/products", (req, res) => {
    res.send("All Products");
});

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});


// router level

const express = require("express");
const app = express();

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log("User router middleware");
    next();
});

userRouter.get("/profile", (req, res) => {
    res.send("User Profile");
});

userRouter.get("/orders", (req, res) => {
    res.send("User Orders");
});

app.use("/user", userRouter);

app.get("/products", (req, res) => {
    res.send("All Products");
});

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});


// error handling


const express = require("express");
const app = express();

app.get("/error", (req, res, next) => {
    const err = new Error("Something went wrong");
    next(err);
});

app.use((err, req, res, next) => {
    console.log("Error:", err.message);

    res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000");
});


// built in middleware
const express = require("express");
const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    console.log("Username:", username);
    console.log("Password:", password);

    res.send("Signup data received");
});

app.listen(3000);