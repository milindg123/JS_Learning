//Number

//Primitive Number
const score = 400
console.log(score); // output : 400

//Number Object
const balance = new Number(100)
console.log(balance);  // otput :[Number : 400]

// String Length of Number
console.log(balance.toString().length);  // Output: 3 (Length of the string representation of the number)

// Formatted String with Decimal Places
console.log(balance.toFixed(2)); //specially used in ecomerce website
// Output: "100.00" (Formatted as a string with two decimal places)


// String Representation with Precision
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)) // Output: "123.9" (String representation with three significant digits)


// Locale-Specific Formatting
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // Output: "10,00,000" (Formatted as a string with locale-specific formatting)



// ****************** Maths ************************************

// Logging the Math Object
console.log(Math); // Output: [object Math] (Math is an object in JavaScript) //it is an object of its own

// Absolute Value
console.log(Math.abs(-4)); // Output: 4 (Absolute value - negative becomes positive, positive remains the same)

// Rounding Methods
console.log(Math.round(4.6)); // Output: 5 (Rounds to the nearest integer)
console.log(Math.ceil(4.2)); // Output: 5 (Rounds up to the nearest integer) 4 ke jara se bhi jyada ho gaya to oo top value le lega
console.log(Math.floor(4.9)); // Output: 4 (Rounds down to the nearest integer) 4.9 hoga tabhi oo 4 hi write karega

// Minimum Value
console.log(Math.min(4,9,1,10,45)); //output : 1 (Returns the minimum value among the provided numbers)

//Maximum Value
console.log(Math.max(4,9,1,10,45)); // output : 45 (Returns the maximum value among the provided numbers)


// Random Number Generation
console.log(Math.random()); // Output: A random decimal between 0 (inclusive) and 1 (exclusive)

// For a dice game where you want values between 1 and 10:
console.log((Math.random()* 10) + 1);
console.log(Math.floor(Math.random()* 10) + 1); // +1 add kiya kyuki ye 0 value bhi de sakata hai isliye

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //in range madhe jar value lagat asel tar(max - min + 1) 
// ani jar min 10 dilele asel tr last la apan + min add kele