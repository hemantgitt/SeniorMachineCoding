// Get names of users who are adults (age >= 18)

const users = [
  { name: "A", age: 22 },
  { name: "B", age: 17 },
  { name: "C", age: 28 },
  { name: "D", age: 15 },
];

const resultv1 = users
  .filter((item) => item.age >= 18)
  .map((item) => item.name);
// console.log(resultv1)

// Find total price of products that are in stock
const products = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Phone", price: 500, stock: 0 },
  { name: "Watch", price: 200, stock: 10 },
  { name: "Tablet", price: 700, stock: 0 },
];

const resultv2 = products
  .filter((item) => item.stock > 0)
  .reduce((acc, int) => acc + int.price, 0);
// console.log(resultv2);

// Double every number and find their total
const numbers = [2, 4, 6, 8];

const resultv3 = numbers
  .map((item) => item * 2)
  .reduce((acc, int) => acc + int, 0);
// console.log(resultv3)

// Check whether there is at least one admin -- ismein some() use hoga find nhi find admin ka objectd dega very imp line.
const usersa = [
  { name: "A", role: "user" },
  { name: "B", role: "admin" },
  { name: "C", role: "user" },
];

const resultv4 = usersa.some((item) => item.role === "admin");
// console.log(resultv4);

// Check whether every number is greater than 5
const numberss = [10, 20, 30, 40];

const resultv5 = numberss.every((item) => item > 5);
// console.log(resultv5)

// Find user with id 3 only if the user is active
const users1 = [
  { id: 1, name: "A", active: false },
  { id: 2, name: "B", active: true },
  { id: 3, name: "C", active: true },
];

const resultv6 = users1.find((item) => item.id === 3 && item.active === true);
// console.log(resultv6)

// Get employees earning >= 60000,
// sorted by salary from highest to lowest
const employees = [
  { name: "A", salary: 70000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 90000 },
  { name: "D", salary: 60000 },
];

const resultv7 = employees
  .filter((item) => item.salary >= 60000)
  .sort((a, b) => b.salary - a.salary);
// console.log(resultv7)

// Return only unique numbers
const numbers2 = [1, 2, 3, 2, 4, 1, 5, 3];

const resultv8 = numbers2.filter(
  (item, index) => index === numbers2.indexOf(item),
);
// console.log(resultv8)

// Create:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// reduce() yahan kya kar raha hai?

// Humein fruits ko count karna hai. Isliye acc ko ek empty object {} se start kiya.
// Har fruit ke liye:

// acc[int] = (acc[int] || 0) + 1

// Iska matlab:
// Agar apple pehli baar aaya → acc.apple nahi hai → 0 + 1 → 1
// Apple dobara aaya → acc.apple already 1 → 1 + 1 → 2
// Phir apple → 2 + 1 → 3
// So object gradually banta hai:
// {}
// ↓
// { apple: 1 }
// ↓
// { apple: 1, banana: 1 }
// ↓
// { apple: 2, banana: 1 }
// Main concept: reduce() mein acc ko hum ek result object bana rahe hain, aur har item ki frequency usmein store kar rahe hain.
// return acc → updated object ko next iteration mein le jaata hai.

const resultv9 = fruits.reduce((acc, int) => {
  acc[int] = (acc[int] || 0) + 1;
  return acc;
}, {});
// console.log(resultv9)

const employeess = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 90000 },
  { name: "C", salary: 70000 },
  { name: "D", salary: 60000 },
];

// Find employee with highest salary

// const resultv10 = employeess.reduce((max , item)=> item.salary > max.salary ? item : max )
// console.log(resultv10)
//alternative

const resultv101 = employees.reduce((max, item) => {
  if (item.salary > max.salary) {
    return item;
  } else {
    return max;
  }
});

// console.log(resultv101)

const usersss = [
  {
    name: "A",
    skills: ["React", "JavaScript"],
  },
  {
    name: "B",
    skills: ["Java", "Spring"],
  },
  {
    name: "C",
    skills: ["React", "Node"],
  },
];

// Get users who know React

const resultv11 = usersss.filter((item) => item.skills.includes("React"));
// console.log(resultv11);

const orders = [
  { user: "A", amount: 100, status: "completed" },
  { user: "B", amount: 200, status: "cancelled" },
  { user: "C", amount: 300, status: "completed" },
  { user: "D", amount: 400, status: "completed" },
];

// Find total amount of completed orders

const resultv12 = orders
  .filter((item) => item.status === "completed")
  .reduce((acc, int) => acc + int.amount, 0);

// console.log(resultv12);

const user23 = [
  { id: 1, name: "A", age: 25, active: true },
  { id: 2, name: "B", age: 17, active: true },
  { id: 3, name: "C", age: 30, active: false },
  { id: 4, name: "D", age: 22, active: true },
  { id: 5, name: "E", age: 19, active: true }
];

// Get names of active users whose age >= 20,
// sorted alphabetically.

const resultv15 = user23.filter(item => item.age >= 20 && item.active === true).map(item => item.name).sort((a,b)=> a.localeCompare(b))
console.log(resultv15)
