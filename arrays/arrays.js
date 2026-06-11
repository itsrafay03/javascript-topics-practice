// // Making Array object using constructor.
// let arr1 = new Array(2, 4, 'Ahmad', 99.457, true);
// console.log(arr1);

// // Using Array object using literal.
// const arr2 = [1, 'Asad', 3.45, false]
// console.log(arr2);
// console.log(arr2[3] = true);
// arr2.push('Salman');  // Adds element to END
// console.log(arr2);
// arr2.pop();           // Remove last element
// console.log(arr2);
// arr2.unshift(true)    // Adds to START (Slow, moves all indexes) and return length of array.
// console.log(arr2);
// arr2.shift()          // Removes from START (Slow)
// console.log(arr2);
// arr2[1] = false;      //  Change the value at specific index
// console.log(arr2);
// console.log(arr2.at(1));
// console.log(arr2.indexOf(3.45));  // if not found return -1
// console.log(arr2.findIndex((value) => value === 3.45));  // return index if condition match otherwise -1
// console.log(arr2.find((value) => value === 3.45));  // return value that matches condition otherwise return undefined
// const arr3 = [2, 4, 3, 5];
// console.log(arr3.every((element) => element > 2));
// console.log(arr3.find((value) => value === 3));   // return that value otherwise undefined
// console.log(arr3.forEach((value) => console.log(value)));
// console.log(arr3.map((value) => value * 10));
// console.log(arr3.filter((value) => value >= 4));
// console.log(arr3.reduce((acc, value) => acc + value, 0));
// console.log(arr3.slice(0, 2));
// The splice method is like swis knife, it can be used for multiple purposes as: splice(start index, no. of deleting values, insert value)
// Deleting items from Array
// a = arr3.splice(1, 2);
// console.log(arr3, a);
// // Inserting items in Array
// arr3.splice(0, 0, 'Green')
// console.log(arr3);
// // Replacing items of Array
// arr3.splice(2, 1, 'Bahawalpur')
// console.log(arr3);

// // Sort work simply for strings. But for numbers you have to pass callabck function for ascending and decending sort.
// console.log(['G', 'C', 'B', 'D', 'A'].sort().reverse());
// console.log(arr3.sort((a, b) => a - b));  // Ascending sort
// const students = [{ name: "John", age: 25 }, { name: "Jane", age: 22 }, { name: "Mark", age: 28 }];
// let ageWiseSorted = students.sort((a, b) => b.age - a.age);  // Sort in decending order.
// console.log(ageWiseSorted.forEach((value) => console.log(value)));
// // Sort mutates the orignal array. So its batter to make copy of arry before sorting it, so that orignal array can be preserved.
// let arr4 = [1, 4, 8, 12, 15];
// arr5 = [...arr4].sort((a, b) => b - a);
// console.log(arr5);
// console.log(arr4.some((value) => value >= 15));  // if any element of array matches the condition then it return true.
// console.log(arr4.includes(2));  // simpley check if array has specific element or not.
// // Merging arrays without mutating. This is the best way to make copy of array.
// const compoundArray = [...arr1, "WWE", 125, "RAW", ...arr2];
// console.log(compoundArray);

// // Shallow copy: Simple Spread operator will work for copying simple array objects but they are nested objects we need deep copy.
// const arr6 = ["Ali", "BWP", 23]
// let arr7 = arr6;  // arr7 is refering same array as arr6
// arr7[1] = 'LHR';  // This will change the element in Orignal array.
// console.log(arr7);   // ['Ali', 'LHR', 23]
// console.log(arr6);   // ['Ali', 'LHR', 23]
// // So its solution is to use spread(...) operator.
// let arr8 = [...arr6];  // This will create the new array in memory which copy elements of arr6
// arr8[1] = 'ISB';  // Now this will only change the element of arr8
// console.log(arr8);  // updated array
// console.log(arr6);  // orignal array will remain same

// // In below case Shallow copy will copy the copy elements of array. But as the elements are objects so new array will just store the reference of those arrays.
// const arr9 = [{ name: "Ali", age: 23 }, { name: "Zia", age: 19 }, { name: "Saad", age: 21 }];
// arr9.forEach((value) => console.log(value));
// let arr10 = [...arr9]  // New arr10 will form in memory with reference of objects as its elements.
// arr10.forEach((value) => console.log(value));
// arr10[0].name = 'Waqar';  // So arr10[0] will refer to the object of arr9[0], so change by one will change the object.
// console.log(arr10[0].name);     // Waqar
// console.log(arr9[0].name);      // Waqar
// // So its solution is Deep copy, which will actually copy even the elements of array. So we will have completely new array.
// const arr11 = arr9.map(value => ({ ...value }));
// arr11.map((value) => console.log(value));
// arr11[0].name = 'Usman';  // Now only the name of arr11 will chnage and the orignal(arr9) array will remain same.
// console.log(arr11[0].name);
// console.log(arr9[0].name);
// The Deep copy will work only for 1 level. But if there is more nestwd structure then deep copy will again copy the reference. So we need more deep copying of that structure. Lets try.
// const arr12 = [{ names: ['Ali', 'Salman', 'Jahan'] }, { ages: [23, 24, 18] }]
// arr12.forEach((value) => console.log(value));
// // let arr13 = arr12.map(value => ({...value}));  // It will create a Shallow copy so we need Deep copy as following:
// let arr13 = arr12.map(obj => {
//     const key = Object.keys(obj)[0];
//     return {
//         [key]: [...obj[key]]
//     };
// });
// console.log(arr13[0].names);

// arr13[0].names[0] = "Usman";
// console.log(arr13[0].names);
// console.log(arr12[0].names);


// // Holes in Array in JS:
// let arr14 = [20, 30, 99]; // Array is declared and initilized with 3 elements.
// console.log(arr14);
// arr14[10] = '10 value';  // now we skip all inbetween indexes and assign value to 10th index ao array. So it will extend this array upto 10 indexes and store the value of 10th index.
// console.log(arr14);
// console.log(arr14[5]);  // As 5th index has no value so it is undefined
// arr14[7] = 90.9090;  // Again we skip inbetween indexes and assign value to 7th index.
// console.log(arr14);


// ***************** _ Destructuring Array _ ***************** //

// const cities = ['Bwp', 'Lhr', 'Isb'];
// const [home, work, travel, goal] = cities;
// console.log(home);

// const colors = ['red', 'green', 'blue', 'pink']
// let [firstCol, , , lastCol] = colors;
// console.log(firstCol);
// console.log(lastCol);

// The Rest Pattern.
// const marks = [99,95,89,85,80,71];
// let [topper, ...others] = marks    // spread operator
// console.log(others);

// When there is no value in the array but we give default.
// const score = [100]
// const [first, second=0] = score;
// console.log(first);
// console.log(second);  // 0 instead of undefined

// Swap variables in 1 line easily by destructuring.
// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log(a);  // 10
// console.log(b);  // 5

// Destructure a nested structure.
// const nested = ['Ali', [23, 34], 'Usman'];
// let [one, [two, three], four] = nested;
// console.log(two);


// Implement a function flatten that returns a new array with all sub - array elements flattened recursively

// function flatten(arr) {
//     return arr.flat(Infinity);
// }
// console.log(flatten([1, 2, 3]));  // => [1, 2, 3]
// console.log(flatten([1, [2, 3]]));  // => [1, 2, 3]
// console.log(flatten([[1, 2], [3, 4],]));  // => [1, 2, 3, 4]
// console.log(flatten([1, [2, [3, [4, [5]]]]]));  // => [1, 2, 3, 4, 5]

function faltt(arr) {
    let array = [];
    arr.map(value =>{
        if(Number.isInteger(value)){
            array.push(value);
        }else{
            array.push(...faltt(value));
        }
    })
    return array;
}

let flatArr1 = faltt([2, 7, [3, 4, [5, 6, [10, 11]]]]);
console.log(flatArr1);

let flatArr2 = faltt([1,2,3,4,5]);
console.log(flatArr2);



// Fabonicce series question.
// function faboncci(num) {
//     let ans = 1;
//     while (num >= 1) {
//         ans *= num; 
//         num--;
//     }
//     return ans
// }

// By recursion.
// function faboncci(num){
//     if (num == 1 || num == 0) return 1;
//     return num *  faboncci(num-1);
// }
// let fab = faboncci(0);
// console.log(fab);

    

