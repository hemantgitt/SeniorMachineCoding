// Q-1 give me names whos age is less then 20 -- use kiya filter and map method
const users = [
  { name: "A", age: 25 },
  { name: "B", age: 17 },
  { name: "C", age: 30 },
  { name: "D", age: 20 },
];

const filterdata = users
  .filter((user) => user.age > 20)
  .map((user) => user.name);
// console.log(filterdata)

// Q-2 Find total salary of users age >= 20 -- use kiya filter and reduce method

const persons = [
  { name: "A", age: 25, salary: 50000 },
  { name: "B", age: 17, salary: 30000 },
  { name: "C", age: 30, salary: 70000 },
  { name: "D", age: 20, salary: 40000 },
];

const result = persons
  .filter((item) => item.age >= 20)
  .map((item) => item.salary)
  .reduce((acc, int) => acc + int, 0);
// console.log(result)

// Q-3 Find the first active user whose name is "C" -- find method use kiya yeh yeh first true value milne pe iteration rok deta where as filter pura iteration karta hai .
const users2 = [
  { name: "A", active: false },
  { name: "B", active: true },
  { name: "C", active: true },
  { name: "D", active: false },
];

const result1 = users2.find(
  (item) => item.name === "C" && item.active === true,
);
// console.log(result1)

// Q-4 Get users age >= 20 and sort them by age descending -- filter + sort
const users3 = [
  { name: "A", age: 25 },
  { name: "B", age: 17 },
  { name: "C", age: 30 },
  { name: "D", age: 20 },
];

const result2 = users3
  .filter((item) => item.age >= 20)
  .sort((a, b) => b.age - a.age);
// console.log(result2)

// Q-5 Find total price of all electronics. - filter+map+reduce
const products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Shirt", price: 100, category: "clothing" },
  { name: "Watch", price: 200, category: "electronics" },
];

const result3 = products
  .filter((item) => item.category === "electronics")
  .map((item) => item.price)
  .reduce((acc, int) => acc + int, 0);
// console.log(result3)

const user43 = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "manager" },
  { name: "D", role: "user" },
];

const allowedRoles = ["admin", "manager"];

// Q-6 Get names of users whose role exists in allowedRoles

const result4 = user43.filter((item) => allowedRoles.includes(item.role));
// console.log(result4)

//Q-7 Get numbers that are at an even index
const numbers = [10, 20, 30, 40, 50, 60];

const result5 = numbers.filter((_, index) => index % 2 === 0);
// console.log(result5)

// Get names of users age >= 25,
// sorted alphabetically
const users0 = [
  { name: "A", age: 32 },
  { name: "B", age: 18 },
  { name: "C", age: 25 },
  { name: "D", age: 40 },
];

const result6 = users0
  .filter((item) => item.age >= 25)
  .map((item) => item.name)
  .sort((a, b) => a.localeCompare(b));
// console.log(result6);

// Calculate total credit amount
const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
];

const resultss = transactions
  .filter((item) => item.type === "credit")
  .reduce((acc, int) => acc + int.amount, 0);

// console.log(resultss)

const users9 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" },
  { id: 2, name: "B" },
];

// Return users with unique IDs

const resultt = users9.filter(
  (item, index) => index === users9.findIndex((user) => user.id === item.id),
);
console.log(resultt);
