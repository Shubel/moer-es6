// 1st example
const friends =["Ashraful", "Zim", "Nabil", "Mahim"];
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

// 2nd example
const products = [
    {name: "water bottle", price: 150, color: "Blue"},
    {name: "mobile phone", price: 24000, color: "White"},
    {name: "Pen", price: 20, color: "Red"},
    {name: "Smart Watch", price: 2700, color: "Black"}
];
const productPrice = products.map(product => product.price);
console.log(productPrice);
const productColor = products.map(product => product.color);
console.log(productColor);
products.map(product => console.log(product));

// forEach
products.forEach(product => console.log(product));