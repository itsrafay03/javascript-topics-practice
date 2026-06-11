let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.find(value => value >= 3));
console.log(arr.findIndex(value => value === 5));
console.log(arr.includes(20));
console.log(arr.some(value => value > 3));
console.log(arr.every(value => value > 3));
console.log(arr.push(6));
console.log(arr.pop());
console.log(arr);
arr.unshift(0);
arr.shift();
console.log(arr);
// splice(index of start, no. of elements to delete, insert element)
arr.splice(2, 1);
console.log(arr);
arr.splice(2, 0, 3)








