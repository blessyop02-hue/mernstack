// import {isEven,isOdd} from './fn.js';
// console.log(isEven(3));
// console.log(isOdd(4));


import {sumFunction} from './fn.js';

let result = sumFunction(5, 10);

if (result > 0) {
    console.log("The sum is positive");
}
else if (result < 0) {
    console.log("Number is negative");
}
else {
    console.log("The sum is zero");
}