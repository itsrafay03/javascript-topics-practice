// // 1. Object Literal: The "Data Container"
// const restaurant = {
//     name: "Savour Foods",
//     rating: 4.5,
//     // Method Shorthand (Best Practice)
//     greet() {
//         console.log(`Welcome to ${this.name}`);
//     },
//     // Arrow Function (Dangerous here!)
//     printRating: () => {
//         console.log('Rating is: ', this.rating); // ❌ Result: undefined
//     }
// }
// // Adding property to resturant object dynamically.
// restaurant.price = 1000;
// // Adding normal method to resturant object dynamically.
// restaurant.booking = function () {
//     console.log('In Booking Function.', this.name);
// }
// // Adding fat-arrow method to resturant object dynamically.
// restaurant.checkIn = () => {
//     console.log('Hello', this.name);
// }
// console.log(restaurant);
// restaurant.checkIn();
// restaurant.booking();
// restaurant.printRating();



// // const bbq = restaurant;
// // console.log(bbq);  // Now bbq will refer the same object of resturant in memory. Same as Array case.
// // bbq.name = 'Food Panda';
// // console.log(restaurant.name);  // Food Panda. The name is changed in orignal object in heap.

// // // Now bq is a separate object in heap, also a copy of resturant object.
// // const bq = {...restaurant};   // Use spread operator to copy object.
// // console.log(bq);
// // bq.name = 'Lataska'  // Now change in bq object will not change the name in resturant object.
// // console.log(restaurant.name);  // Savour Foods
// // console.log(bq);


// const book = {
//     name: 'Atomic Habbits',
//     rating: 4.7,
//     price: 2500,
//     // Method Shorthand.
//     intro() {
//         console.log('Welcome to this book named', this.name);
//     },

//     average(constant = 10) {
//         return this.price * this.rating / constant;
//     },

//     conclusion: () => {
//         console.log(`The Summary of book ${this.name} is ......!`);
//     }
// }

// // let b1 = book.average(16);
// // console.log(b1); 
// // console.log(book.conclusion());  // The Summary of book  is ......!
// // console.log(book.rating);  // 4.7



// // 2. ES6 Classes: The "Factory Blueprint"
// class Restaurant {
//     // 1. Properties are initialized here
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }

//     // 2. Methods are defined outside the constructor
//     displayInfo() {
//         console.log(`${this.name} is in ${this.location}`);
//     }

//     details = () => {
//         console.log('Details');
//     }
// }

// // 3. Initialization
// const rest1 = new Restaurant("Savour", "Islamabad");
// console.log(rest1);


// // 2. ES6 Classes: The "Factory Blueprint"
// class Ground {
//     // All the properties are generally defined in the parameters of constructor and initilized in body of constructor. 
//     constructor(length, width, area) {
//         this.length = length;
//         this.width = width;
//         this.area = area;
//     }

//     // Method Shorthand (Best Practice)
//     gameing() {
//         console.log('We are playing hockey in ground of area: ', this.area);
//     }

//     // Fat-arroe method. (But value is assigned to key by = operator in class of JS).
//     wrestling = () => {
//         console.log('Start wrestli at ', this.length);
//     }
// }

// const gr1 = new Ground(20, 30);
// console.log(gr1.area); // undefined, as we do not initilize it.
// // Adding property to ground object dynamically.
// gr1.price = 1000;
// // Adding normal method to ground object dynamically.
// gr1.booking = function () {
//     console.log('In Booking Function.', this.length);
// }
// // Adding fat-arrow method to ground object dynamically.
// gr1.checkIn = () => {
//     console.log('Hello', this.width);
// }
// console.log(gr1);
// gr1.checkIn();
// gr1.booking();
// gr1.wrestling();
// gr1.gameing();

// const gr2 = new Ground(2, 4, 8);
// gr2.gameing = function () {
//     console.log('I am in Ovridden WWE RAW');
// }
// gr1.gameing();
// gr2.gameing();
// console.log(gr2.price);

// /// Shallow and Deep Copy using Spread Operator:
// const a = {
//     name: 'Ali',
//     age: 23
// }

// // const b = a;  // b refer sam object
// // b.name = 'Salman'
// // console.log(a.name);  // orignal data is change.

// // const c = {...a};  // c is new object which copy data of a object.
// // c.name = 'Waqar';
// // console.log(a.name);  // orignal data is safe.

// // Nested object:
// const d = {
//     name: 'Usman',
//     address: { city: 'BWP' },
//     age: 23
// }
// // Spread operator create Shallow Copy:
// // const e = {...d};
// // e.address.city = 'LHR';
// // console.log(d.address.city);

// // Deep Copy.
// const f = structuredClone(d);
// f.address.city = 'ISB';
// console.log(d.address.city);


// ///?***************** Destructuring of Object ***************///

// const obj1 = { name: 'Ali', age: 34, id: 101 }
// const { name, id } = obj1;
// console.log(id);

// // To give name parameters to function.
// function registration({ name, cnic, age }) {
//     console.log(`Name: ${name}, age: ${age}...`);
// }
// const newUser = { age: 23, name: "Wasay", cnic: 3345, address: 'Bwp' }
// registration(newUser);

// // Renaming the property name.
// let { name: userN } = obj1;
// console.log(userN);

// // Default value to property.
// const { height, address = 'BWP' } = { height: 23.4, weight: 90 };
// console.log(address);

// // Practice:
// // Q1:
// const project = {
//     title: "Zomato Clone",
//     details: {
//         tech: "React",
//         version: 19
//     },
//     isPublic: false
// };
// // Extracts the title.
// // Extracts the tech (from inside details).
// // Extracts isPublic but renames it to isOpenToAll.
// // Assigns a default value of "Web" to a new variable called category.
// const { title, details: { tech }, isPublic: isOpenToAll, category = "Web" } = project;

// // Q2:
// const order = {
//     id: 5001,
//     customer: {
//         name: "Hassan",
//         location: {
//             city: "Bahawalpur",
//             coord: { lat: 29.3, long: 71.6 }
//         }
//     },
//     items: ["Biryani", "Raita"],
//     total: 1200
// };
// // Extracts the name from inside customer.
// // Extracts the lat (latitude) from deep inside location but renames it to latitude.
// // Assigns a default value of "Cash" to a new variable called paymentMethod.
// // The New Twist: Use the Rest Operator (...others) to gather the id, items, and total into a single object called orderInfo.
// let {customer:{name, location:{coord:{lat: latitude}}}, paymentMethod = 'Cash', ...orderInfo} = order;
// // in above object if we just have to access the property of lat the we will write.
// console.log(order.customer.location.coord.lat); // 29.3
// // if we want just value of lat and long then we can also write using Destructuring as:
// let {lat, long} = order.customer.location.coord;
// console.log(lat , long);


///************************  Loops in Object  ************************///

// const restaurant = { name: "Savour", rating: 4.5, city: "BWP", 3: 'Aloo' };
// // For-in loop
// for (const key in restaurant) {
//     console.log(`${key}: ${restaurant[key]}`);  // Use Bracket Notation to get the value!
//     // 3 is the integer key thats why move to the top in console.
// }

// // Object.keys()
// const keys = Object.keys(restaurant);
// console.log(`The object has ${keys.length} elements.`);

// keys.forEach(keys => console.log(restaurant[keys]));

// // Object.values()
// const values = Object.values({ a: 2, b: 3, c: 7 });
// console.log(values);
// console.log(values.reduce((acc, value) => acc + value, 0));

// // Object.entries()
// // We almost always use this with Destructuring inside a for...of loop.
// let entries = Object.entries(restaurant);
// for (const [key, value] of entries) {
//     console.log(`The ${key} is ${value}`);
// }

// // Check that for-in loop show methods that look up the Prototype Chain.
// class Student {
//     constructor(name, age, id) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }

//     // Normal method in class so go to Prototype.
//     study() {
//         console.log(this.name, ' is Studing.');
//     }
// }

// const stu1 = new Student('Ali', 34, 9890);
// console.log(stu1); // only show properties as study method is in proto.
// // Here for-in loop is unable to show study method which is in prototype.
// for (const key in stu1) {
//     console.log(key);
// }
// // Why? Because:
// // In JavaScript, every property on an object has a "secret" configuration. One of these is a boolean called enumerable. If enumerable: true, the loop sees it. If enumerable: false, the loop ignores it.
// // The Fact: When you define a method inside an ES6 Class (like your study() method), JavaScript automatically sets it to enumerable: false by default. JS do this to make console less messy.
// // So to prove the for-in concept we have to add the method manually in Prototype of object, adding the method manually will keep enumerable:true and we can see it from for-in loop.

// Student.prototype.play = function () { console.log(this.name, ' is Playing.') };

// console.log(stu1);

// for (const key in stu1) {
//     console.log(key);
// }


// // You have a menu object:
// const menu = { pizza: 1200, burger: 500, fries: 200 };
// // Can you use Object.entries(menu) and a for...of loop to print a string for each item that says: "The [ITEM NAME] costs [PRICE] PKR"?
// const items = Object.entries(menu);
// for (const [key, value] of items) {
//     console.log(`The ${key} costs ${value} PKR`);
// }

// ///************************ Optional Chaining ***********************/ ///
// const res1 = { name: "Savour", info: { city: "BWP" } };
// const res2 = { name: "KFC" }; // No info object!

// // console.log(res1.inf.city);  // Error.
// console.log(res1.info?.citie);

// // console.log(res2.info.city);
// console.log(res2.info?.city);

// ///************************ Computer Properties ********************/ ///
// const platfrom = prompt("Please enter platform name:");
// const myStartup = "Lataska Resturant"

// const post = {
//     [platfrom]: myStartup,
//     [`${platfrom}_id`]: 1234
// }

// console.log(post);
// console.log(post.youtube);

// Q2:
const keySuffix = "Id";
const userId = 9890;
const userRecord = { [`student_${keySuffix}`]: userId }
console.log(userRecord);

// Q3:
let feature = "isOpen";
const currentStatus = false;
const update = {
    [feature]: !currentStatus
}
console.log(update);

// Q4:
let category = "electronics";
let itemCount = 5;
const stock = { [`${category}_total`]: itemCount * 100 }
console.log(stock);


//************************ Practice of Objet Topic******************//
// Create object and notice behaviour of boolean and Integer key.
const student = {
    name: 'Ali',
    age: 23,
    false: 23345,  // Boolean key will remain as it is here
    911: 'America' // Integer key will become string and shift to the top of all.
}
console.log(student);
console.log(student.false);  // 23345
console.log(student[false]);  // 23345
// console.log(student.911);  // Syntax Error
console.log(student[911]);    // America

//
const user = {
    'first-name': 'Khan',
}
console.log(user.first - name);  // We can not access first-name by . notation because it has - in it.
console.log(user['first-name']);  // We can access it by [] notation.

const locations = {
    city: "Bhopal",
    coordinate: {
        lat: 23.2,
        lng: 77.4,

    },

};
let { city, coordinate: { lat } } = locations;
console.log(city, lat);


let { "first-name": firstName } = user;
console.log(firstName);






