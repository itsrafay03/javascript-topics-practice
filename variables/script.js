// console.log(bdd); // ❌ ReferenceError
// let bdd = 20;

// // {
// //     console.log(a); // ❌ ReferenceError
// //     var a = 10;

// // }

// // console.log(a); // ❌ ReferenceError

// var a = 10;

// {
//     var a = 20;
// }

// console.log(a);
// // Here output will be 20 because var is function scoped and not block scoped(var does not respect blocks). So when we declare var a inside the block, its redecleration of global variable a so it overwrites the previous value of a.

// const x = { "name": 23 };
// x.name = 10;
// x = {}; // ❌ TypeError: Assignment to constant variable.

// let arr1 = [1, 2];
// let arr2 = arr1; // Copies the pointer address
// arr2.push(3);

// console.log(arr1);
// console.log(arr2);

// // Coercion in JS:
// let num1 = "3";
// console.log(typeof num1); // string
// num1 = num1 + 3;
// console.log(num1); // "33"
// num1 = num1 - 3;
// console.log(num1); // 30
// num1 = num1 / 0;
// console.log(num1); // Infinity

// let num2 = "Hello" / 3;
// console.log(num2);  // NaN

// const num3 = "333" / false;
// console.log(num3); // Infinity

// true == 1; // true
// true == '1'; // true because '1' is coerced to number 1
// 'Hello' == 0; // true because 'Hello' is coerced to NaN and NaN is not equal to anything including itself, so it is treated as 0 in this comparison
// true === 1;  // false because === checks for both value and type, here true is boolean and 1 is number

// "Hello" == 1; // false because 'Hello' is coerced to NaN and NaN is not equal to anything including itself, so it is treated as 0 in this comparison, and 0 is not equal to 1

// null == undefined; // true because null and undefined are considered equal in non-strict equality


// if (`0`) {
//     console.log('IF')
// } else {
//     console.log('Else')
// }

// let s = Symbol('id1');

// let bigNum = 90071992547468763243n;
// console.log(bigNum);
// console.log(typeof bigNum); // bigint
// bigNum = bigNum + 12n;
// console.log(bigNum);

// let result = 2 + "4.5" > "5";
// console.log(result); // false

// console.log(!!2); // true

// let score = 78;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

// console.log(grade)  // B


// ----====== -----------========= -----------========== -----------========= ----
// const newArr = [...oldArr, 4, 5];  // (Great for cloning!)


// function withdrawAmount(user, amount) {
//     if (!user.login) return "Please Login first";
//     if (amount < 0) return "Invalid Amount";
//     if (amount > balance) return "Insufficient Balance";

//     // Main Logic
//     balance -= amount;
//     return Success;
// }

// withdrawAmount(22, 333);


// function getGrade(score) {
//     if (score >= 90 && score <= 100) return "A+";
//     if (score >= 80 && score <= 89) return "A";
//     if (score >= 70 && score <= 79) return "B";
//     if (score >= 60 && score <= 69) return "C";
//     if (score >= 33 && score <= 59) return "D";
//     if (score >= 0 && score <= 32) return "Fail";
//     return 'Invalid Marks';
// }

// function rps(user, computer) {
//     if (user === computer) return "Its Tie."
//     if (user === "rock") {
//         if (computer === "scissor") return "user wins";
//         return "computer wins";
//     }
//     if (user === "paper") {
//         if (computer === "rock") return "user wins";
//         return "computer wins";
//     }
//     if (user === "scissor") {
//         if (computer === "paper") return "user wins";
//         return "computer wins";
//     }
//     return "Invalid Input."
// }

// function frui(name) {
//     switch (name) {
//         case "Apple":
//             console.log("Apple");

//         default:
//             console.log("default");
//     }
// }

// function isEmpty(value) {
//     if (value === null) return "Value is Null";
//     if (value === undefined) return "Value is undefined";
//     if (value === "") return "Value is empty string";
//     return "Value is not Empty";
// }

// // Using switch + arithmetic operators
// function calc(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//         case '%':
//             return a % b;
//         default:
//             return "Invalidity operator"
//     }
// }

// const str = "Aslam";
// for (const s of str) {
//     console.log(s);
// }

// num_array = [2, 4, 6, 8, 2, 5]
// obj = { name: "Salman", age: 90, email: "khan@gmail.com", height: 5.9 }

// console.log("For-of loop on Array:");
// for (const item of num_array) {
//     console.log(item);
// }

// console.log("For-in loop on Array:");
// for (const element in num_array) {
//     console.log(element);
// }

// // console.log("For-of loop on object:");
// // for(const itm of obj){
// //     console.log(itm);
// // }

// console.log("For-in loop on object:");
// for (const elem in obj) {
//     console.log(elem);
// }

// console.log("For-in loop on str");
// for (const st in str) {
//     console.log(st);
// }

// const colors = ["Red", "Green", "Blue"];
// colors.forEach((e, index) => {
//     console.log(`${index}: ${e}: ${colors}`);
// });

// const products = [
//     { name: "Phone", isStock: true },
//     { name: "Tablet", isStock: false },
//     { name: "Laptop", isStock: true }
// ]

// // const available = products.filter((item => item.isStock === true));
// const available = products.filter(p => p.isStock === true);
// console.log(available[0].name);
// console.log(available[1].name);
// console.log(typeof available);
// console.log(available.length); // output: 2



// React Prep Challange:
// The Scenario: You have an array of "Product" objects from an API.Some products are out of stock, and some are very expensive.Your goal is to:
// Filter out any product that is inStock: false.Filter out any product that costs more than 1000.
// Map the remaining products into a "Display String" like: "Product: [Name] - $[Price]".
// const products = [
//     { id: 1, name: "Laptop", price: 1200, inStock: true },
//     { id: 2, name: "Mouse", price: 25, inStock: true },
//     { id: 3, name: "Keyboard", price: 75, inStock: false },
//     { id: 4, name: "Monitor", price: 300, inStock: true },
//     { id: 5, name: "USB Cable", price: 10, inStock: true }
// ];

// // YOUR TASK: Chain .filter() and .map() to get the final list.
// // const result = products.filter(item => (item.inStock === true && item.price < 1000));
// // console.log(result);

// const finalResult = products.filter(item => (item.inStock && item.price < 1000)).map(item => `Price: ${item.name} - ${item.price}`);
// console.log(finalResult);

// for (let i = 0; i < result.length; i++) {
//     let pName = result[i].name;
//     let pPrice = result[i].price;
//     console.log(`Product: ${pName} - ${pPrice}`);
// }


// let a = result.map((product) => `Product: ${product.name} - ${product.price}`);
// console.log(a);

// console.log(typeof result);
// result.map((product) => console.log(product));
// result.map((product) => console.log(`${product}`));
// result.map((product, index) => console.log(`${index} = ${product}`));


// const arr = [{ name: "Ali" }, { name: "Zain" }];
// console.log("Typeof", typeof arr);  // object

// for (const element of arr) {
//     console.log(element.name);
// }

// Practice questions of traditional loops in JS.
// 1
// for (let i = 1; i < 10; i++) {
//     console.log(i)
// };

// 2
// let num = 10;
// while (num >= 1) {
//     console.log(num);
//     num--;
// }

// 3
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 4
// let num = 1;
// while (num <= 15) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
//     num++;
// }

// 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * 1}`);
// };

// 6
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// };
// console.log("Sum of 1 to 100 numbers is: ", sum);

// 7
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// };

// 8
// for (let i = 1; i <= h; i++) {
//     console.log("y");

// };

// 9
// let input = prompt("Enter your number: ");
// for (let i = 1; i <= input; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "is Even Number.");
//     } else {
//         console.log(i, "is Odd Number.");
//     }
// };

// 10
// let count = 0
// for (let i = 1; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log(i);
//         count++;
//     }
// };
// console.log("Number divisible by 3 and 5 are: ", count);

// 11
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i % 7 === 0) break;
// };

// 12
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) continue;
//     console.log(i);
// };

// 13
// let counter = 1;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         if (counter++ === 5) {
//             break;
//         }
//     }
// };

// function first() {
//     console.log("First Fun");
//     let a = second();
//     console.log(" ");

//     console.log(a);
//     // a();

// }

// function second() {
//     console.log("Second Fun");
//     return "Ali";
// }

// console.log(first);
// console.log(first());

// //===
// console.log("================");
// let aa = second();
// console.log(aa);

// console.log("***************");
// let aaa = second;
// aaa();

// let arrow = (a, b) => {
//     return (a + b) / 9;
// };

// function age() {
//     return 23;
// }

// function foo(id, fun) {
//     let name = id;
//     let saal = fun();
//     return (...args) => {
//         return `Name: ${name}, Age: ${saal}, Details: ${args[0]}`;
//     };
// }
// console.log("The Answer of THIS is: ", arrow(2, 4));

// const firs = foo("Waqar", age);
// console.log(firs("Bwp", "Karachi", 8.990, 125));


// const secret = (function () {
//     let pin = 1234;
//     return () => console.log("PIN is safe");
// })();
// // The outer function ran immediately and disappeared.
// console.log(secret());


// (function () {
//     if ("ww") {
//         console.log("IIFE");
//     }
//     console.log("Imediately Invoked Function Expression");
// })();

// console.log("=========");

// function withLogging(originalFunc) {
//     return (...args) => {
//         console.log(`Calling function with: ${args}`);
//         return originalFunc(...args); // It "wraps" the original logic
//     };
// }

// const loggedSum = withLogging((a, b) => a + b);
// let operation = loggedSum(5, 10, 3); // Automatically logs the input before giving the result!
// console.log(operation);

// // We have to access the outer scoped variable in the body of closure, not in the parameter of closure.
// function hoo() {
//     let num = 23;
//     const name = "Salu";

//     return function (num) {   // Shadowing.
//         return `Name is ${name} and age is ${num}`;
//     }
// }


// function zoo(animal = "Lion") {
//     animal += "Sparrow";
//     return animal
// }

// console.log(zoo("Bakra"));




// ///////////////

// // function applyDiscount(price, callback){
// //     return (price) => callback(price);
// // }


// // QUE-4:
// // The HOF (Generic Machine)
// let applyDiscount = (price, callbackFun) => callbackFun(price);

// // Calling it with an "Inline" Arrow Function (Common in React)
// let finalPrice = applyDiscount(1000, (p) => p - (p * 0.1));

// console.log(finalPrice); // 900

// function abc() {
//     let bahar = 12;
//     return function sdd() {
//         let foo = "Ali" + bahar;
//         return foo;
//     }
// }

// function sumScore(...params) {
//     let sum = 0;
//     params.forEach((score) => sum += score);
//     return sum;
//     // for (const element of params) {
//     //     sum += element;
//     // }
//     // return sum;
// }
// console.log(sumScore(2, 4, 5, 7, 8, 90, 1));


// function foo() {
//     console.log("In");
// }

// function hoo(params) {
//     params();
// }

// // foo();
// hoo(foo);

// function bmi(weigth, height) {
//     return (weigth / (height * height)).toFixed(3);
// }


