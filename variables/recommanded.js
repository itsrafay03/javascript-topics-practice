// Start Learning JavaScript.

// 1. Variables
var name = "John";
let age = 30;
const PI = 3.14;

// 2. Data Types
let isStudent = true;
let score = null;
let hobbies = ["reading", "gaming", "coding"];
let person = { name: "Alice", age: 25 };
// 3. Functions
function greet(name) {
    return "Hello, " + name + "!";
}
let greeting = greet("Bob");

// 4. Control Structures
if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}
// 5. Objects and Arrays
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
let numbers = [1, 2, 3, 4, 5];
// 6. DOM Manipulation
document.getElementById("myButton").addEventListener("click", function () {
    alert("Button clicked!");
});

// 7. Event Handling
document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
});

// 8. Asynchronous JavaScript
setTimeout(function () {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

// 9. ES6 Features
let [first, second] = numbers;
let { make, model } = car;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person1 = new Person("Charlie", 28);
console.log(person1.greet());

// 10. Error Handling
try {
    let result = 10 / 0; // This will not throw an error in JavaScript, but let's simulate an error
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }
} catch (error) {
    console.error("An error occurred:", error.message);
}
