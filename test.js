// Q1:
// What is the output and type?
// "5" + 3  // "53", string
// "5" - 3  // 2, number
// true + true + "3"  // "23", string
// null == undefined  // true, boolean
// null === undefine //  false, boolean


// Q2:
// Analyze the following code and explain the output:
// const user = {
//     name: "Ali",
//     greet() {
//         console.log(this.name);
//     },
//     greetDelayed() {
//         setTimeout(function () {
//             console.log(this.name);
//         }, 100);
//     }
// };

// user.greet();    // Ali, because greet() is a regular function which has its own 'this'. Also in the statement user.greet(); the 'this' will refer to the user object so this.name means user.name which is Ali so we when we log it it show us Ali.

// user.greetDelayed();    // undefined, because greetDelayed() has a inner function which is standalone function and this has no context here. Means here 'this' will look in its outer scope in which there is no name defined. So after 100ms when we log this.name we get undefined. As 'this' for arrow function does not refer to object.


// Q3:
// Write a function to reverse a given string.
// function reverseString(str) {
//     let chars = [];
//     for (const element of str) {
//         chars.unshift(element);
//     }
//     console.log(chars);
//     // chars.forEach(value => console.log(value));
//     let reverse = chars.reduce((acc, curr) => acc + curr);
//     return reverse;

// }
// console.log(reverseString("hello"));
// console.log(reverseString("JavaScript"));


// // Q4:
// // Implement a function flatten that returns a new array with all sub - array elements flattened recursively.
// function flatten(array = [1, [2, 3]]){
//     let data = JSON.parse(JSON.stringify(array));
//     console.log(data);

// }

// flatten([1, 2, 3]);
// // => [1, 2, 3]

// flatten([1, [2, 3]]);
// // => [1, 2, 3]

// flatten([
//     [1, 2],
//     [3, 4],
// ]);
// // => [1, 2, 3, 4]

// flatten([1, [2, [3, [4, [5]]]]]);
// // => [1, 2, 3, 4, 5]


// Q5:
// Fetch data from the following API and return a list of usernames:
// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         if (!response.ok) {
//             throw new Error("Network Error.");
//         }

//         const data = await response.json();
//         let usernames = data.map(value => value.username)
//         return usernames;
//     } catch (error) {
//         console.error(error);
//     }
// }
// I think this code will give return the usernames list as ["Bret", "Antonette", "Samantha", ...]


// Q6:
// Write a function delay(ms) that returns a Promise which resolves after ms millseconds. Then use async/await to
// 1. Print "Hello"
// 2. Wait 2 seconds
// 3 Print "World"

// function delay(ms){
//     return new Promise(value => setTimeout(value, ms));
// }

// async function message(){
//     console.log('Hello');
//     await delay(2000);   // now promise is fullfilled so call stack move foward.
//     console.log('World');

// }

// message();


// Q7:
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     describe() {
//         return `A ${color} shape`;
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }

//     area() {
//         return (2 * Math.PI * this.radius);  // I donot know exact formula.
//     };


//     describe() {
//         return `A ${this.color} color with radius ${this.radius}`;
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return (this.height * this.width);
//     }

//     describe() {
//         return `A ${this.color} rectangle with width ${this.width} and height ${this.height}`;
//     }
// }

// const c = new Circle("red", 5);
// console.log(c.area());
// console.log(c.describe());
// console.log(c instanceof Shape);
// const r = new Rectangle("blue", 4, 6);
// console.log(r.area());
// console.log(r.describe());



// Q8: Destructuring:
// const config = {
//     server: {
//         host: "localhost",
//         port: 8080,
//         credentials: { user: "admin", password: "secret" },
//     },
//     debug: true,
//     version: "2.1.0",
// };

// const {server: {host, port, credentials:{user:dbUser}}, timeout=3000, ...rest} = config;
// console.log(host);
// console.log(port);
// console.log(dbUser);
// console.log(timeout);
// console.log(rest);


// Q9:
const employeeDataset = [
    {
        id: 1, name: "Aisha Khan",
        department: "Engineering", salary: 72000, yearsExp: 3,
    },
    {
        id: 2, name: "Mei Zhang",
        department: "Design", salary: 2000, yearsExp: 5,
    },
    {
        id: 3, name: "Khan",
        department: "Marketing", salary: 720000, yearsExp: 10,
    },
    {
        id: 4, name: "Alli Khan",
        department: "Engineering", salary: 7300, yearsExp: 2,
    },
]

// function getActiveEngineers(employeeDataset) {
//     return employeeDataset.filter(values => (values.department === 'Engineering')).map(value => value['name']);
// }
// console.log(getActiveEngineers(employeeDataset));


// function getAverageSalary(employeeDataset) {
//     let totalSalary = employeeDataset.reduce((acc, value) => acc + value['salary'], 0);
//     return (totalSalary / employeeDataset.length).toFixed(2);
// }
// console.log(getAverageSalary(employeeDataset));

// function getMostExperienced(employeeDataset) {
//     let employe = employeeDataset.reduce((per, cur) => (cur.yearsExp > per.yearsExp ? cur : per));
//     return employe['name'];
// }
// console.log(getMostExperienced(employeeDataset));


// function findBySkill(employeeDataset, skillString){
//     return employeeDataset.filter(value => value.skill = skillString).map(value => value['name']);
// }
// findBySkill(employeeDataset, "React");


// Closure Example: 
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let count1 = counter();
count1();
count1();

let count2 = counter();
count2();
count2();

//// curring, once, memoize, debounce, throttle.

// take out name and salary of each employee in dataset. 
let result = employeeDataset.map(value => ({name: value.name, salary: value.salary}));
console.log(result);