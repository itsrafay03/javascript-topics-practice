// ///////////////////////////   Data Structures:   /////////////////////////
// // 1. Set:
// // A Set is a collection of unique values. It can be used to store any type of data, whether primitive values or object references. Sets are useful for storing unique items and performing operations like union, intersection, and difference.
// let mySet1 = new Set();
// mySet1.add(11);
// mySet1.add(12);
// mySet1.add(13);
// mySet1.add('Hello World');
// mySet1.add({ name: 'Ali', age: 23 });
// console.log(mySet1); // Output: Set(5) { 11, 12, 13, 'Hello World', { name: 'Ali', age: 23 } }
// console.log(typeof mySet1); // Output: object
// let a = mySet1.delete(20);
// console.log(a);
// let b = mySet1.has(12);
// console.log(b);
// console.log(mySet1.size);
// // mySet1.clear();
// // console.log(mySet1); // Output: Set(0) {}

// // iterating set:
// mySet1.forEach((value) => console.log(value));

// for (const element of mySet1) {
//     console.log(element);
// }



// /////////////// 2. WeakSet: ///////////////

// // What is ment by: "If an object is only stored in a WeakSet and has no other references, then it can be garbage collected."? It simply means that the object is only used (directly or by reference) inside a WeakSet but there is no variable, no array, no object pointing to it. Visually:
// // Case A: Has another reference so object will be not ❌ garbage collected.
// // let obj = { name: "Ali" };
// // weakSet.add(obj);

// // 👉 References:
// // obj variable → pointing to object ✅
// // WeakSet → weak reference to object ✅
// // ➡️ Object is NOT eligible for GC because it has a strong reference (obj variable) pointing to it, even though it is also in a WeakSet. The presence of the strong reference (obj variable) prevents the object from being garbage collected, as it is still accessible through that reference. 
// // As Garbage collection depends on strong references and not on weak references, so as long as there is a strong reference to the object, it will not be garbage collected, regardless of whether it is also in a WeakSet or not. So in this case, the object will not be garbage collected because it has a strong reference (obj variable) pointing to it, even though it is also in a WeakSet. 

// // Case B: Object is Only in WeakSet ✅, so it has no strong reference, just has a weak reference, so it will be eligible for GC. Visually: 
// // let obj = { name: "Ali" };
// // weakSet.add(obj);
// // obj = null;  // here we remove the strong reference to the object by setting obj to null.
// // 👉 Now:

// // ❌ No variable pointing to object
// // ✅ Only WeakSet (weak reference)
// // ➡️ Object is eligible for GC.


// // Scnerio when obj is used in weakSet so it will be garbage collected, if not used anywhere else, but in set it will not be garbage collected because set is a strong reference. Visually:
// // 🔹 With Set:
// let obj1 = { name: "Ali" };  // obj1 is the strong reference to the object.
// let set1 = new Set();

// set1.add(obj1);     // we use obj1 to add the object to the set, so set1 is also a strong reference to the object.
// console.log(obj1);  // Output: { name: 'Ali' }
// obj1 = null;        // as obj1 was refering to the object so here we Remove first strong reference to the object. This does NOT delete the object, it just removes our reference to it. The object still exists in memory because set1(strong reference) is still holding it. 
// console.log(obj1);  // Output: null
// console.log(set1);  // Output: Set(1) { { name: 'Ali' } }

// // 👉 obj1 Object is NOT deleted by garbage collector because set will keep holding it. If set is not holding it, then it will be garbage collected (because obj is not in use anywhere else). But since set is holding it, it will not be garbage collected. So we can say that set is a strong reference to the object, and weakSet is a weak reference to the object. so if we want to use weakSet, we can use it like this:

// // 🔹 With WeakSet:
// let obj2 = { name: "Salman" };  // obj2 is the strong reference to the object.
// let weakSet1 = new WeakSet();

// weakSet1.add(obj2);  // we use obj2 to add the object to the weakSet, but weakSet1 is a weak reference to the object because it is a weakSet.
// console.log(obj2);  // Output: { name: 'Salman' }
// obj2 = null;        // Remove the strong reference to the object. This does NOT delete the object, it just removes strong reference to it. The object still exists in memory because weakSet1 is still holding it. But now there is no other strong reference to the object (as weakSet1 is weak reference), so it becomes eligible for garbage collection.
// console.log(obj2);  // Output: null
// console.log(weakSet1);  // Output: WeakSet { { name: 'Salman' } } 

// // 👉 But obj2 Object CAN be deleted by garbage collector because WeakSet does NOT keep it alive as weakSet1 is a weak reference to the object.
// // When obj2 is set to null, it becomes eligible for garbage collection. The garbage collector can then reclaim the memory used by the object, and it will be removed from the weakSet1 as well. So we can say that weakSet is a weak reference to the object, and it allows the object to be garbage collected when there are no other references to it.
// // But since we cannot directly observe the garbage collection process, we cannot guarantee when the object will be removed from memory. It may happen immediately or at some later time, depending on the garbage collector's behavior and the overall memory usage of the application.
// // But in above weakSet scnerio if we donot do obj2 = null, then the strong reference will remain in memory and the object will not be garbage collected, even though it is in a weakSet.


// // Another example:
// // Tell me tell you what is happening in this below code snippet: the code snippet is an example of using a WeakMap to store private data for a class. The WeakMap is used to associate private data with instances of the User class. When a new User instance is created, the constructor sets a secret value in the WeakMap using the instance as the key. The getSecret method retrieves the secret value from the WeakMap using the instance as the key. The important aspect of using a WeakMap here is that if a User instance is no longer referenced elsewhere in the code (i.e., it becomes eligible for garbage collection), the associated data in the WeakMap will also be eligible for garbage collection. This means that when a User instance is gone, the secret data associated with it in the WeakMap will also be gone, ensuring that private data does not persist unnecessarily in memory.
// // ✅ Example 2: Private data(WeakMap)
// // const privateData = new WeakMap();

// // class User {
// //     constructor(name) {
// //         privateData.set(this, { secret: "123" });
// //     }

// //     getSecret() {
// //         return privateData.get(this).secret;
// //     }
// // }

// // 👉 When User instance is gone → data also gone ✅


// // Statement:
// // "WeakSet and WeakMap are used when we want to associate data with objects without stopping their garbage collection. They are useful for tracking or metadata without causing memory leaks." Explanation:
// // 1. What does “associate data with objects” mean? It simply means: Attach extra information to an object, without modifying the object itself
// // Example WITHOUT WeakMap
// const user = { name: "Ali" };
// user.isLoggedIn = true;    // adding extra data
// // Problem: You are modifying the original object. Not always allowed (e.g., library objects, DOM elements).
// // Example WITH WeakMap
// const user = { name: "Ali" };
// const extraData = new WeakMap();
// extraData.set(user, { isLoggedIn: true });
// console.log(extraData.get(user));
// // Here: user = key and { isLoggedIn: true } = associated data
// //You didn’t touch the original object ✅

// // 2. What is “tracking”? Tracking means: Remembering something about objects, Example: Avoid processing same object twice.
// const processed = new WeakSet();

// function process(obj) {
//     if (processed.has(obj)) {
//         console.log("Already processed");
//         return;
//     }

//     processed.add(obj);
//     console.log("Processing...");
// }
// //You are tracking which objects were already processed.

// // 3. What is “metadata”? Metadata = data about data. Example: Caching results of computations based on objects.
// const cache = new WeakMap();

// function compute(obj) {
//     if (cache.has(obj)) {
//         return cache.get(obj);
//     }

//     const result = obj.value * 2;
//     cache.set(obj, result);
//     return result;
// }
// // Here obj = original data and result = metadata about obj

// // 4. Why WeakMap/WeakSet here? Because we don’t want memory leaks



///////////////////// 3. Map: //////////////////
// const userRole = new Map();
// const adminObj = { id: 1 };
// userRole.set(adminObj, "SuperAdmin"); // Using an OBJECT as a key! This is impossible in object because in object the key is always a string/symbol.
// console.log(userRole.get(adminObj)); // "SuperAdmin"


// // Object vs Map (core difference)
// const obj = {};
// obj["name"] = "Ali";
// obj[123] = "number key";
// obj[true] = "boolean key";
// // In object Keys become strings.
// console.log(obj.Keys); // Output: [ 'name', '123', 'true' ]

// const map = new Map();
// map.set("name", "Ali");
// map.set(123, "number key");
// map.set(true, "boolean key");
// // Keys stay as it is in Map.
// console.log(map.keys()); // Output: MapIterator { 'name', 123, true }


// // The REAL power of Map is that keys can be objects/functions. 
// // Using object as key:
const map1 = new Map();
const user1 = { name: "Ali" };
const user2 = { name: "Ahmed" };
map1.set('name', 'Ali');
map1.set(user1, "Admin");
map1.set(user2, "User");
console.log(map1.get(user1)); // Admin
console.log(user1);  // Output: { name: 'Ali' }
console.log(map1);  // Output: Map(2) { { name: 'Ali' } => 'Admin', { name: 'Ahmed' } => 'User' }

// // Try same with object:
// const obj = {};
// obj[user1] = "Admin";
// obj[user2] = "User";
// console.log(obj); // Output:  { "[object Object]": "User" }
// // Problem: Both keys become " [object Object] " Data gets overwritten.

// use function as key in map:
// const map2 = new Map();
// function greet() {
//     console.log("Hello");
// }
// map2.set(greet, "Hello");
// console.log(map2.get(greet)); // Output: "Hello"
// console.log(map2);  // Output: Map(1) { [Function: greet] => 'Hello' }

// itrating map:
// console.log(map1.values());
// console.log(map1.keys());
// map1.forEach((value, key) => {
//     console.log(key, value);
// });

// Real use cases of Map:
// 1. Store data for DOM elements:
// const map = new Map();
// const button = document.querySelector("button");
// map.set(button, { clicked: 0 });
// You are associating data with a specific element.

// 2. Cache results (very common)
// const cache = new Map();

// function compute(obj) {
//   if (cache.has(obj)) {
//     return cache.get(obj);
//   }

//   const result = obj.value * 2;
//   cache.set(obj, result);
//   return result;
// }
// Key = object
// Value = computed result


///////////////// 4. WeakMap: ////////////////////
// Problem with Map
// const map = new Map();
// let obj = { name: "Ali" };
// map.set(obj, "data");
// obj = null;
// Object still in memory Because map holds it.

// ✅ Solution with WeakMap
// const wm = new WeakMap();
// let obj = { name: "Ali" };
// wm.set(obj, "data");
// obj = null;
// Object can be garbage collected because there is no strong reference left. And No memory leak.

