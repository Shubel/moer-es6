// 1st example
const numbers = [2, 5, 12, 65, 4, 34, 7, 14, 33];

// filter
const filterBiggerNumber = numbers.filter(number => number > 20);
console.log(filterBiggerNumber);  // [ 65, 34, 33 ]    (Given the all elements into an array)

// find
const findBiggerNumber = numbers.find(number => number > 20);
console.log(findBiggerNumber);  // 65    (Given the first element)

// 2nd example
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

// filter
const expensive = products.filter(product => product.price > 100);
console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');
console.log(blacks);
const greenItem = products.filter(product => product.color == 'green');
console.log(greenItem);  // if the property value is not exists, then result is empty array []

// find
const blackItem = products.find(product => product.color == 'black');
console.log(blackItem);