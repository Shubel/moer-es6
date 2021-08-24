// const numbers = [4, 6, 8, 10];
// const output2 = [];

// // function doubleIt (number) {
// //     return number * 2;
// // }
// const doubleIt = number => number * 2;
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);



// map
const numbers = [4, 6, 8, 10];

// function doubleOld (number) {
//     return number * 2;
// }
const doubleIt = number => number * 2;

// for (const number of numbers) {
//     const result = doubleIt(number);
// }

// loop through each element
// for each element call the provided function
// result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);