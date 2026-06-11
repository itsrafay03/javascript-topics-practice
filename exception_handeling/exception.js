// const data = JSON.parse(['name', 'age', 34, true]);
// console.log(data); //

// // Example:1
// try {
//     console.log("I am in Try block.");
//     // const data = JSON.parse('{"name":"Ali", "age":30, "isAdmin":true}');
//     const data = JSON.parse(['name', 'age', 34, true]);
//     console.log(data);
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//     console.log(error.toString());
// }
// finally {
//     console.log("This will always execute");
// }

// // Example:2
// function withdraw(amount, balance) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     return balance - amount;
// }

// try {
//     withdraw(500, 300);
// } catch (error) {
//     console.log(error.message); // Output: Insufficient balance
// } finally {
//     console.log('Done.');
// }


// // Example:3
// Scenario: You are fetching restaurant data from an external API for your project. Sometimes the data comes back as a broken string instead of a valid Object. Handle it and if it fails (throws a SyntaxError), catch it and return a default "Empty Restaurant" object: { name: "Unknown", menu: [] }.

// function getRestaurantData(jsonString) {
//     try {
//         const object = JSON.parse(jsonString);
//         console.log(object);
//     } catch (error) {
//         if (error instanceof SyntaxError) {
//             return { name: "Unknown", menu: [] };
//         }
//         return error.name;
//     }
// }

// const resturant = getRestaurantData('{"name":"Pasta Place", "menu": ["Spaghetti", "Lasagna"]}'); // Valid JSON}')
// console.log(resturant); // Output: { name: 'Pasta Place', menu: [ 'Spaghetti', 'Lasagna' ] }
// const resturant2 = getRestaurantData('{"name":"Pasta Place", "menu": ["Spaghetti", "Lasagna"]'); // Invalid JSON
// console.log(resturant2); // Output: { name: 'Unknown', menu: [] }

// // Example:4
// function processPayment(balance, amount){
//     if (amount > balance) {
//         throw new Error("Transaction Failed: Balance too low");
//     }
// }

// try {
//     processPayment(100, 150);
// } catch (error) {
//     console.log(error.message);
// }

// // Example:5
// let isLoading = true;
// try {
//     foo();
// } catch (error) {

// } finally {
//     isLoading = false;
// }
// console.log(isLoading); // Output: false
