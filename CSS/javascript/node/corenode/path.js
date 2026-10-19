import path from 'path';
const p="/home/tutorial/nodejs/sample.txt";
console.log(path.basename(p));
console.log(path.dirname(p));
console.log(path.extname(p));
console.log(path.join('/home','node','corecode','path.js'));
console.log(path.parse(p));




// filepath
// const path = require("path");

// let filePath = path.join("students", "data", "marks.txt");

// console.log(filePath);