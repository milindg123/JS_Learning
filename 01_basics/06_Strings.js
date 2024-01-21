const name = "Milind"
const repoCount = 50

// console.log(name + repoCount + " Value");

// Difference between double quotes and backticks
//Double Quotes (") and Single Quotes ('): In these types of quotes, you concatenate strings and variables using the + operator

// Backticks `` allow string interpolation or placeholders
// Backticks (``): Backticks allow for string interpolation using ${}. This means you can embed expressions and variables directly within the string.
//  by using backticks we can create a placeholders
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Declaration of String using String Constructor
const gameName = new String('Milind-MG')
console.log(gameName[0]); //Accessing characters by index, o/p : M
console.log(gameName.__proto__); // output : {} -->(String objects inherit from the Object prototype)

console.log(gameName.length); //Output: 9 (Length of the string)


// ****** String Methods ******


// substring
// Extracts characters from index 0 to 4 (exclusive)
const newString = gameName.substring(0, 4)
console.log(newString); //Mili

// slice
// Extracts characters starting from the end (negative index) to index 4
const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //output : ili

// toUpperCase
// Converts the string to uppercase
console.log(gameName.toUpperCase()); //output : MILIND-MG

// toLowerCase
// Converts the string to lowercase
console.log(gameName.toLowerCase()); // output : milind-mg

// charAt
// Returns the character at a specified index
console.log(gameName.charAt(2)); // output : l

// indexOf
// Returns the index of the first occurrence of a specified value in a string
console.log(gameName.indexOf('d')); // output : 5


// trim() -> whitespaces remove kar deta hai
// Removes leading and trailing spaces from a string
const newStringOne = "  Milind  "
console.log(newStringOne); //output : ___Milind___ --> __ shows whitespace
console.log(newStringOne.trim()); // output : Milind

// replace
// Replaces spaces with an empty string
const url = "https://milind.com/milind%20ghegadmal"
console.log(url.replace('%20', '-'));

// includes
// Checks if a string contains another string
console.log(url.includes('milind')); //true

console.log(url.includes('mayur')); // false

// Spit 
// Split the string with the 'character'('-') given
console.log(gameName.split('-'))


// startsWith
// Checks if a string starts with a specified value
console.log(gameName.startsWith("Milind")); // Output: true

// endsWith
// Checks if a string ends with a specified value
console.log(gameName.endsWith("MG")); // Output: true