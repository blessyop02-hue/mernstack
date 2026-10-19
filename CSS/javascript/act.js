

    
let students = [
 {name:"Ali", marks:85},
 {name:"Sara", marks:45},
 {name:"John", marks:92},
 {name:"Emma", marks:67},
 {name:"ammu", marks:16},
 {name:"anu", marks:23}
];
// console.log(students);
students.forEach(student=>{
    console.log(student.name);
});
let passed = students.filter(student => student.marks>= 50);
console.log(passed);

// let passed = students.find(student => student.marks>= 50);
// console.log(passed);

let total = students.reduce((sum,student) => {
    return sum + student.marks;
}, 0);

console.log(total);

let avarage=total+students.length;
console.log(avarage);

 let pass = students.every(student => student.marks >= 50);
 console.log(pass);

 let skills = [
    ["HTML", "CSS"],
    ["JavaScript", "React"]
];

let an = skills.flatMap(skill => skill);

console.log(an);


let name=["john","alex","mary","david"]
name.sort();
console.log(name);



let letters=["A","B","C"];

let result=letters.reduceRight((acc,value)=>{
    return acc+value;
},"");
console.log(result);




// student data analyzer

// const students = [
//     { name: "Ali", marks: 85 },
//     { name: "Sara", marks: 45 },
//     { name: "John", marks: 92 },
//     { name: "Emma", marks: 67 }
// ];

// // 1. forEach() - Display Students

// console.log("All Students:");

// students.forEach(student => {
//     console.log(student.name + " - " + student.marks);
// });


// // 2. map() - Grade Conversion

// const grades = students.map(student => {

//     let grade;

//     if (student.marks >= 80) {
//         grade = "A";
//     } else if (student.marks >= 60) {
//         grade = "B";
//     } else if (student.marks >= 40) {
//         grade = "C";
//     } else {
//         grade = "F";
//     }

//     return student.name + " - " + grade;
// });

// console.log("Grades:");
// console.log(grades);


// // 3. filter() - Passed Students

// const passed = students.filter(student => student.marks >= 50);

// console.log("Passed Students:");
// console.log(passed);


// // 4. reduce() - Total and Average

// const total = students.reduce((sum, student) => {
//     return sum + student.marks;
// }, 0);

// const average = total / students.length;

// console.log("Total Marks:", total);
// console.log("Average Marks:", average);


// // 5. every() - Validation

// const allPassed = students.every(student => student.marks >= 50);

// const validMarks = students.every(student =>
//     student.marks >= 0 && student.marks <= 100
// );

// console.log("All students passed:", allPassed);
// console.log("All marks valid:", validMarks);


// // 6. flatMap() - Skills Generator

// const skills = ["HTML CSS", "JavaScript React"];

// const skillList = skills.flatMap(skill => skill.split(" "));

// console.log("Skills:");
// console.log(skillList);


// // 7. reduceRight() - Reverse Report

// const reverseReport = students.reduceRight((result, student) => {
//     return result + student.name + " - " + student.marks + "\n";
// }, "");

// console.log("Reverse Report:");
// console.log(reverseReport);