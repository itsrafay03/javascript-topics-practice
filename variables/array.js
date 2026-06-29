let array = [1,2,3,4,5];
array.push(6)
console.log(array);
array.pop()
console.log(array);
array.shift()
console.log(array);
array.unshift(1)
console.log(array);
let a1 = array.forEach(elem => console.log(elem * 5));
let a2 = array.map((elem, index) => `${index}:${elem}`);
console.log(a2);
let a3 = array.filter(elem => elem>=3);
console.log(a3);
let a4 = array.reduce((acc, cur) => acc + cur, 0);
console.log(a4);
let a5 = array.slice(1, 3);
console.log(a5);
let a6 = [...array].sort((a, b)=> b-a);
console.log(a6);
let arr = [...array];
let a7 = arr.splice(2, 1);
let a9 = arr.splice(1, 0, 99, 104);
arr.splice(4, 2, 'Ali', 'Khan');
console.log(a7);
console.log(arr);
let a10 = array.find((elem)=> elem==2);
console.log(a10);
let a11 = array.findIndex((elem)=> elem==1);
console.log(a10);
let a12 = array.some(elem => elem%3===0);
console.log(a12);
let a13 = array.every(elem => elem%3===0);
console.log(a13);
let a14 = array.includes(20);
console.log(a14);
let a15 = array.concat(['Ali', 123])
console.log(a15);
let a16 = array.join(';');
console.log(a16);
let arra = [1,2, [3, [4, [5, 6]]]]
let a17 = arra.flat(1);
console.log(a17);
let a18 = arra.flat(2);
console.log(a18);
let a19 = arra.flat(Infinity);
console.log(a19);
let a20 = array.flatMap(elem => elem);
console.log(a20);
let a21 = array.reverse()
console.log(a21);
console.log(array);
let a22 = array.fill(0, 1, 3)
console.log(a22);
let a23 = array.indexOf(2)
console.log(a23);
// typeOf array is object:
console.log(typeof(array));
// to check it is array:
console.log(Array.isArray(array));
console.log([1] === [1]); // Because Array is object so each one has different memory location in Heap.
let a24 = new Array(2, 3, 4);
a24.push(99);
console.log(a24);
a24[10] = '1000'
console.log(a24);
console.log(a24[5]);

// Array Destructuring:
let myArray = ["Bwp", "Lhr", "Isb", "Khi"];
let [mycity, , friendCity] = myArray;
console.log(`${mycity} : ${friendCity}`);

let [ourCity, ...otherCities] = myArray;
console.log(otherCities);

let [first = 0.0, second = 0.1] = [1999];
console.log(`${first} :: ${second}`);

let [fir, sec] = [1999];
console.log(`${fir} :: ${sec}`);

// Swaping
let [a, b] = [1, 2];
console.log(`${a} : ${b}`);
[a, b] = [b, a]
console.log(`${a} : ${b}`);

let [x] = null;
