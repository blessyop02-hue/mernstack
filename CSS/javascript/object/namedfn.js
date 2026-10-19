//1. A function that has its own name when declared. 

// Fully hoisted — you can call it before its definition
// Has its own this (depends on how it’s called)
// Has arguments
// Can be used with new, but prefer class / dedicated constructors — don’t treat that as the normal pattern

// function Person(name) {
//   this.name = name;
// }

// let p = new Person("Amit");


// example
// function greet() {
//   return "Hello!";
// }
// console.log(greet());


// Anonymous Function
// An anonymous function is a function defined without an explicit name. It is commonly used as a callback or assigned to a variable.

// const greet = function() {
//   return "Hi there!";
// };
// console.log(greet());


// anonimous
// const values=[1,2,3,4,5,6,7];
// values.forEach(function(val){
//     console.log("helo world",val);
// });

// difference of named and anonymous
// function myFunction(val){
//     console.log("hello world",val);
// }
// const fn=function(val){
//     console.log("hello world",val);
// }
// myFunction(100);
// fn(200);

// example
// myFunction(100);
// fn(200);
// function myFunction(val){
//     console.log("hello world",val);
// }
// const fn=function(val){
//     console.log("hello world",val);
// }



// function myFunction(val){
//     console.log("helo world",val);
// }
// // myFunction();
// const values=[1,2,3,4,5,6,7];
// values.forEach(myFunction);


// const values=[1,2,3,4,5,6,7];
// values.forEach(function myFunction(val){
//     console.log("helo world",val);
// });

