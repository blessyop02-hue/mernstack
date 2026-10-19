// const users = [ 
// { id: 1, name: "Arun", age: 22 },
//  { id: 2, name: "Rahul", age: 25 },
//  { id: 3, name: "Meera", age: 21 },
//  { id: 4, name: "Anu", age: 28 } ];
//  const names = users.map(user => user.name);
//  console.log(names); 



//  const products = [ 
// { name: "Laptop", price: 60000 },
//  { name: "Mouse", price: 800 }, 
// { name: "Keyboard", price: 1500 }, 
// { name: "Monitor", price: 12000 },
//  { name: "Headphones", price: 3000 }
//  ]; 
// const result = products.filter(product => product.price > 5000);
//  console.log(result); 


//  const users = [
//  { id: 1, name: "Arun", age: 22 }, 
// { id: 2, name: "Rahul", age: 25 },
//  { id: 3, name: "Meera", age: 21 }, 
// { id: 4, name: "Anu", age: 28 } 
// ]; 
// const user = users.find(user => user.id === 3); 
// console.log(user); 


// const users = [
//  { name: "Arun", role: "user" },
//  { name: "Rahul", role: "user" }, 
// { name: "Meera", role: "admin" }
//  ];
//  const isAdmin = users.some(user => user.role === "admin"); console.log(isAdmin); 


//  const users = [
//  { name: "A", age: 22 },
//  { name: "B", age: 25 }, 
// { name: "C", age: 19 }, 
// { name: "D", age: 30 }
//  ];
//  const Age = users.every(user => user.age >= 18);
//  console.log(Age); 

//  const prices = [100, 200, 300, 400];
//  const gstPrices = prices.map(price => price + (price * 18 / 100));
//  console.log(gstPrices); 


// const cart = [
//  { product: "Laptop", price: 60000, quantity: 1 },
//  { product: "Mouse", price: 1000, quantity: 2 },
//  { product: "Keyboard", price: 2000, quantity: 1 } 
// ]; 
// const total = cart.reduce((sum, item) => { return sum + (item.price * item.quantity); }, 0); console.log(total); 


// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 },
//   { name: "C", age: 30 },
//   { name: "D", age: 35 }
// ];

// let total = users.reduce((sum, user) => sum + user.age, 0);

// let average = total / users.length;

// console.log(average);

// const users = [
//   { name: "A", age: 15 },
//   { name: "B", age: 22 },
//   { name: "C", age: 17 },
//   { name: "D", age: 30 }
// ];

// let result = users.filter(user => user.age >= 18).length;

// console.log(result);


// const numbers = [1, 2, 3, 2, 4, 1, 5, 3, 6];

// let unique = numbers.filter((num, index) => {
//   return numbers.indexOf(num) === index;
// });

// console.log(unique);


// const products = [
//  { name: "Laptop", stock: 5 }, 
// { name: "Mouse", stock: 0 },
//  { name: "Keyboard", stock: 10 },
//  { name: "Monitor", stock: 0 }
//  ];
//  let available = products .filter(product => product.stock > 0) .map(product => product.name); 
// console.log(available); 



// const students = [
//   { name: "Arun", marks: 75 },
//   { name: "Meera", marks: 92 },
//   { name: "Rahul", marks: 68 },
//   { name: "Anu", marks: 85 }
// ];

// students.sort((a, b) => b.marks - a.marks);

// console.log(students);



// const students = [ 
// { name: "A", marks: 85 },
//  { name: "B", marks: 92 },
//  { name: "C", marks: 76 }, 
// { name: "D", marks: 95 }, 
// { name: "E", marks: 88 }
//  ];
//  let top3 = students .sort((a, b) => b.marks - a.marks) .slice(0, 3); 
// console.log(top3); 



// const employees = [
//   { name: "A", department: "IT", salary: 50000 },
//   { name: "B", department: "HR", salary: 40000 },
//   { name: "C", department: "IT", salary: 60000 },
//   { name: "D", department: "HR", salary: 45000 },
//   { name: "E", department: "IT", salary: 70000 }
// ];


// let itTotal = employees .filter(employee => employee.department === "IT") .reduce((sum, employee) => sum + employee.salary, 0);
//  let hrTotal = employees .filter(employee => employee.department === "HR") .reduce((sum, employee) => sum + employee.salary, 0);
//  console.log("IT:", itTotal);
//  console.log("HR:", hrTotal); 

