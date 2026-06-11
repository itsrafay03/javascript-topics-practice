// HOF of Discount.
// let calcDiscount = (price, discountPercent) => (price - (price * (discountPercent / 100)));
// let discount = calcDiscount(1560, 17);
// console.log(`Discount Price: `, discount);

let calcDiscount = (discount) => {
    return (price) => (price - price * (discount / 100));
}

// let discount = calcDiscount(10);
// console.log(discount(1300));

// // HOF of Counter.
function counter() {
    let count = 0;
    return function () {
        count++;
        return (count);
    }
}

// let count = counter();
// console.log(count());
// console.log(count());
// console.log(count());

// // Function of BMI.
function bmi(weight, height) {
    return (weight / (height * height)).toFixed(3);
}
// console.log(bmi(69, 6.7));

// // Create Pure function to transform a value.
function double(val) {
    return val * 2;
}

// console.log(double(4));

// // Use IIFE to isolate variable (means make private variable)
(function privateFun() {
    let key = "wwe-ufc";
    console.log("Key is: ", key);
})();
// // console.log(key);   // Here we will get Reference error for 'key'.

// // Use a function to log even numbers in array.
function evenNums(...nums) {
    for (const element of nums) {
        if (element % 2 === 0) console.log(element);
    }
}
// evenNums(1, 4, 2, 5, 8, 7, 2, 5, 0, 11);

// // HOF Practice:
// // 1: You need a function that takes a "currency symbol" and returns a new function. This new function should then take a price and return it as a string (e.g., "$100").The Goal: Use Currying. Means Create createFormatter(symbol). It returns a function that takes amount. If I call it with "Rs", it should return "Rs 500".
function createFormatter(currency) {
    return (price) => `${currency} ${price}`;
}
// const dollarPrice = createFormatter("$");
// console.log(dollarPrice(100));
// console.log(dollarPrice(999));

// const rsPrice = createFormatter("Rs");
// console.log(rsPrice(500));

//2: Scenario: You have an array of user objects with names and total spending. You need a HOF that takes a "minimum spend" and returns a function that filters the list. The Goal: Combining HOFs with Array Methods (.filter). Means Create getVipFilter(minSpend). It should return a callback that .filter() can use to keep only the users who spent more than that amount.
function getVipFilter(minSpend) {
    return (objArray) => objArray.filter((value) => (value.spending >= minSpend));

}

let objArray = [
    { name: "Ali", spending: 900 },
    { name: "Zia", spending: 1700 },
    { name: "Furqan", spending: 1200 },
    { name: "Aslam", spending: 730 }
]

// let filteredUser = getVipFilter(1000);
// console.log(filteredUser);
// let users = filteredUser(objArray);
// console.table(users);   // Show table of the users.

//3:Scenario: You have a function that adds two numbers. You want to "wrap" it with a HOF that checks if the inputs are actually numbers before running the math. The Goal: Function Wrapping/Decoration. Means Create withValidation(originalFunc). It should return a function that takes (a, b). If both are numbers, return originalFunc(a, b). If not, return an error message: "Invalid Input".
function add(num1, num2) { return num1 + num2 }
function withValidation(originalFunc) {
    return (a, b) => {
        // Below condition will check that a and b are numbers or not.
        if (typeof a === 'number' && Number.isInteger(b)) return originalFunc(a, b);
        return "Invalid Input";
    }
}

// let operation = withValidation(add);
// console.log(operation(2, 4));

//4:Scenario: Different cities in Pakistan have different tax rates (e.g., BWP is 5%, LHR is 10%). The Goal: Configuration abstraction. Means Create makeTaxCalculator(taxPercent). It returns a function that takes a billAmount. The inner function should calculate the tax and return the Total (Bill + Tax).
function makeTaxCalculator(taxPercent) {
    return (billAmount) => (billAmount + billAmount * (taxPercent / 100));
}
// const bwpTaxRate = makeTaxCalculator(5);
// console.log(bwpTaxRate(1500));
// console.log(bwpTaxRate(999).toFixed(1));
// const lhrTaxRate = makeTaxCalculator(10);
// console.log(lhrTaxRate(1250));
// console.log(lhrTaxRate(200000).toFixed(0));

//5: Scenario: You want to know how many times a button is clicked or a function is called without changing the function's code. The Goal: Closure-based state tracking.Means Create trackExecution(func). It should have a local variable count = 0. It returns a function that increments count, logs "Function called X times", and then runs func().
function trackExecution(func) {
    let count = 0;
    return () => {
        count++;
        console.log("Function is called", count, "times.");
        func();
    }
}
// function foo() { console.log("Helo World."); }
// let execution = trackExecution(foo);
// execution();
// execution();
// execution();

//6: Scenario: You want a generic machine that can square a number, cube it, or double it. The Goal: Callback passing. Means Create transform(num, operation). num is a value, operation is a function. Call transform three times using three different Arrow Functions as the callback.
function transform(num, operation) {
    return operation(num);
}

// let squareNum = transform(5, (num) => num * num);
// console.log(squareNum);

// let cubeNum = transform(10, (num) => num*num*num);
// console.log(cubeNum);

// let doubleNum = transform(6, (num) => num*2);
// console.log(doubleNum);


