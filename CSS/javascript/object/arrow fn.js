
// Arrow Function (ES6)
// A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.

// Not hoisted
// No own this — uses lexical this from the surrounding scope
// No arguments object (use rest params: (...args) => {})
// Cannot be used as a constructor (new throws)
// No prototype
// Perfect for callbacks, map / filter / reduce, and preserving outer this

// const square = n => n * n;
// console.log(square(4));

// example
// const fn2=(a,b)=>{
//     return a+b;
// }
// const add=fn2(3,2);
// const mult=fn(3,2);
// console.log(add,mult);

// example
// const fn2=(a,b)=>a+b;
    
// const add=fn2(3,2);
// console.log(add);

//  0r

// const fn2=a=>a+100;
    
// const add=fn2(3);
// console.log(add);
