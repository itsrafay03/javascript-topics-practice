// Implement a function flatten that returns a new array with all sub - array elements flattened recursively

function flatten(arr) {
  return arr.flat(Infinity);
}

console.log(flatten([1, 2, 3]));  // => [1, 2, 3]
console.log(flatten([1, [2, 3]]));  // => [1, 2, 3]
console.log(flatten([[1, 2], [3, 4],]));  // => [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4, [5]]]]]));  // => [1, 2, 3, 4, 5]

// Add a property in a Dataset.
const data = [
  { name: "Ali", age: 23 },
  { name: "Ahmed", age: 25 }
];

const updatedData = data.map(value => ({ ...value, isActive: true }));
console.log(updatedData);  // => [ { name: 'Ali', age: 23, isActive: true }, { name: 'Ahmed', age: 25, isActive: true } ]

///////
console.log('First');
setTimeout(() => console.log('Second'), 0);

async function foo() {
  console.log('In Async');
  setTimeout(() => console.log('Third'), 2000);
}

foo();
console.log('Fourth');

