// Numbers

// An integer is a whole number.
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0151;

const myString = "42.123abc";

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer.

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument,it returns NaN.

// The Number.parseInt() meethod parses a string argument and returns an integer.

// The toString() method returns a string representing the number.

// Chaining = Using several methods chained together.

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

// NaN is an acronym for Not a Number

// The Number.isNaN() method determines whether the passed value is NaN and its type is Number.

console.log(Number.isNaN("Dave"));

// The global isNaN() function determines whether a value is NaN or not.

console.log(isNaN("Dave"));
