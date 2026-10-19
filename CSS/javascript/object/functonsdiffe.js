
// Function Expression

// The variable may be hoisted (var), but the function value is not available until the assignment runs
// With const / let, accessing before the line is a TDZ ReferenceError
// With var, calling before assignment is usually a TypeError (undefined is not a function)
// Same this / arguments behavior as a declaration
// Can be anonymous or named
// Common when assigning functions to variables or passing as callbacks

// example
// const add = function(a, b) {
//   return a + b;
// };
// console.log(add(2, 3));


// numbers.forEach(function(number) {
//     console.log(number);
// });


// Immediately Invoked Function Expression (IIFE)
// IIFE functions are executed immediately after their definition. They are often used to create isolated scopes.

// - Defined and executed immediately
// - Creates a **private scope**
// - Can take parameters and return values


// (function () {
//     console.log("This runs immediately!");
// })();



// IIFE FUNCTION
// (function(arg){
//     console.log('my function',arg);
// })();

// (function(arg){
//     console.log('my function',arg);
// })('world');







// greet("Amit");

// const greet = function(name) {
//     return `Hello, ${name}`;
// };

// 

// var greet = function(name) {
//     return `Hello, ${name}`;
// };
// greet("Amit");


// const person = {
//     name: "Amit",

//     greet: function() {
//         console.log(this.name);
//         console.log(arguments);
//     }
// };

// person.greet();