// let numbers=[10,20,30];
// let fruit=["appple","banana","orange"]
// let mixedArray=[22,44,'hi',8,"hello",true];
// console.log(fruit);
// console.log(fruit[0]);

// let cities=["kochi","thrissur","calicut"];
// console.log(cities.length);

// let nums=[4,8,12];
// nums[1]=10;
// console.log(nums);

// let arr=[1,2,3];
// arr.push(4);
// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.unshift("hai");
// console.log(arr)
// arr.shift();
// console.log(arr);

// let items=["pen","book","pencil"];
// console.log(items.includes("book"));
// console.log(items.indexOf("pencil"));


// first
// let arr=["red","green","blue","yellow"]
// console.log(arr[2]);

// second
// let arr=[10,20,30,40];
// arr[2]="orange";
// console.log(arr);

// arr=["cat","dog","rabbit"]
// console.log(arr.length);

// arr=["apple","orange","banana"]
// console.log(arr);
// arr.push("kiwi");
// console.log(arr);

// arr=["apple","kiwi","orange","banana"]
// console.log(arr);
// arr.pop();
// console.log(arr);


// arr=["apple","kiwi","orange","banana"]
// console.log(arr);
// arr.unshift("cherry");
// console.log(arr);

// arr=["apple","kiwi","orange","banana"]
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr=["anu",26,[56,74,66,95]];
// console.log(arr);
// console.log(arr[2][2]);


// examples

let students = [
    { name: "Anu", mark: 85 },
    { name: "Rahul", mark: 62 },
    { name: "Meera", mark: 92 },
    { name: "Arun", mark: 48 },
    { name: "Neha", mark: 16 }
];
console.log(students);
// // foreach
// students.forEach(student => {
//     console.log(student.name, student.mark);
// });

// // map()
// let marks = students.map(student => student.mark);
// console.log(marks);

// // filter()
// let passed = students.filter(student => student.mark >= 50);

// console.log(passed);


// // find()
// let student = students.find(student => student.name === "Meera");
// console.log(student);



// // reduce()
// let total = students.reduce((sum, student) => {
//     return sum + student.mark;
// }, 0);
// console.log(total);

// let total= students.reduce((sum, student) => {
//     return sum + student.mark;
// }, 0);
// let avarage=total+students.length;
// console.log(avarage);


// // Sort students by marks
// students.sort((a, b) => b.mark - a.mark);
// console.log(students);


// let students=[{name :"anu", mark : 50},
//               {name :"arun",mark:70},
//               {name :"meera" ,mark:80},
//               {name:"meenu",mark:45},
//               {name:"sanu",mark:40}
// ]
// students.forEach(student => {
//     console.log(student.name,student.mark)
        
// });

//  marks = [80, 70, 90, 60];

// let total = 0;

// marks.forEach(mark => {
//     total = total + mark;
// });

// console.log("Total:", total);


// let arr=["apple", "banana", "mango"]
//  let upper=arr.map(upper=>upper.toUpperCase());
//  console.log(upper);

// let colors = ["red blue", "green yellow"];
// console.log(colors);
// let an = colors.flatMap(color => color.split(" "));
// console.log(an);

// let numbers = [10, 20, 30, 40, 50];
// let an = numbers.filter(num => num > 25);
// console.log(an);

// let numbers = [1, 2, 3, 4, 5];
// let an = numbers.filter(num => num %2===0);
// console.log(an);

// let numbers = [1, 2, 3, 4, 5];
// let an = numbers.filter(num => num %2!==0);
// console.log(an);


// const numbers = [10, 20, 30, 40, 50];
// const largest = numbers.reduce((max, num) => {
//     return num > max ? num : max;
// });
// console.log("Largest:", largest);

// let numbers = [10, 20, 30, 40, 50];
// let product = numbers.reduce((result, num) => {
//     return product * num;
// }, 1);
// console.log("Product:", product);


// let letters = ["A", "B", "C"];
// let ans = letters.reduce((total, letter) => {
//     return total + letter;
// });console.log(ans);


// let letters = ["A", "B", "C"];
// let ans = letters.reduceRight((total, letter) => {
//     return total + letter;
// });

// console.log(ans);


// let ages = [20, 22, 19, 25];
// let an = ages.every(age => age > 18);
// console.log(an);


// let numbers = [20, 22, 19, -1];
// let an = numbers.every(num => num > 0);
// console.log(an);




