// // The below code is an example of "Callback Hell" or "Pyramid of Doom" where we have nested callbacks that can become difficult to read and maintain. To avoid this, we can use Promises or async/await syntax for better readability and error handling.
// getData(function (a) {
//     getMoreData(a, function (b) {
//         getEvenMoreData(b, function (c) {
//             console.log(c); // This "Pyramid of Doom" is hard to manage.
//         });
//     });
// });
// // Above is This is asynchronous execution with sequential dependency
// // Under the hood JavaScript is: Single-threaded + asynchronous
// // What happens internally:
// // setTimeout goes to Web APIs
// // JS continues execution
// // After time finishes → callback goes to Callback Queue
// // Event Loop pushes it to Call Stack

// // Modern Solution: Using Promises:
// getData()
//     .then(a => getMoreData(a))
//     .then(b => getEvenMoreData(b))
//     .then(c => console.log(c));

// // Best Solution: Using async/await:
// async function run() {
//     const a = await getData();
//     const b = await getMoreData(a);
//     const c = await getEvenMoreData(b);

//     console.log(c);
// }

// run();


// // rough
// fetchApi('https://api.example.com/data').then(responce => responce.json()).then(data => console.log(data)).catch(error => console.error("Get error",error)).finally(() => console.log("Fetch attempt finished"));

async function fetchData() {
    try {
        const responce = await fetch('https://api.example.com/data');
        const data = await responce.json();
        console.log(data);

    } catch (error) {
        console.error("Get error", error);
    }
}
fetchData();

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");


// async function first() {
// console.log("1");
// await second();
// console.log("2");
// }
// async function second() {
// console.log("3");
// }
// console.log("4");
// first();
// console.log("5"); // Output: 4, 1, 3, 5, 2

