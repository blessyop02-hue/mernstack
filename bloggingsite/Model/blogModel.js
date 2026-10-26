
export let blogs = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        content: "JavaScript is a programming language used to build interactive websites.",
        author: "Ali"
    },
    {
        id: 2,
        title: "Learning Node.js",
        content: "Node.js allows us to run JavaScript outside the browser.",
        author: "Sara"
    },
    {
        id: 3,
        title: "Getting Started with Express",
        content: "Express.js makes it easier to build web servers and APIs.",
        author: "John"
    }
];

export let nextId = 4;

export const createBlogId = () => {
    return nextId++;
};
