// Your first code challenge

// Write code that will return a random letter from your name

var fullName = "Abhijit Kumar";
var randomIndex = Math.floor(Math.random() * fullName.length);
console.log(fullName.charAt(randomIndex));

// Do you see the problem???
console.log("Dave".charAt(Math.floor(Math.random() * 4)));

// Let's make this work for ALL names
const anyName = "Jonathan";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
