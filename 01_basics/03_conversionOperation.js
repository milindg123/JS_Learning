// let score = "45abc"
// let score = null

// let score = undefined
// let score = true
let score = "Milind"

console.log(typeof score); //String
console.log(typeof (score)); //String

// ********** 1 String to Number Conversion ********
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number

console.log(valueInNumber);  //NaN


// let isLoggedIn = 1   // 1 => convert boolean =>True
// let isLoggedIn = 1   // 0 => convert boolean =>False

// let isLoggedIn = ""  // it will give => false

// ************ 2. String to Boolean Conversion **************

let isLoggedIn = "Milind"  // it will give => True
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //True


// ************* 3. Number to String Conversion ****************
let someNumber = 35

let stringNumber = String(someNumber)
console.log(stringNumber); //35

console.log(typeof stringNumber); //String


// **************** Operations ****************

let value = 3
let negValue = -value
console.log(negValue) //It will give -3 neg value

// Arithmetic Operators
let x = 6
let y = 4
let sum = x + y; // 10 (Addition)
console.log(x+y);
let difference = x - y; // 2 (Subtraction)
console.log(x-y);
let product = x * y; // 24 (Multiplication)
console.log(x*y);
let power = x ** y; // 1296(x raised to power y)
console.log(x**y);
let quotient = x / y; // 1.5 (Division)
console.log(x/y);
let remainder = x % y; // 2 (Modulus)
console.log(x%y);
x++; // Increment x by 1
y--; // Decrement y by 1


// **************** String Addition ****************
let str1 = "Hello"
let str2 = " Milind"

let str3 = str1 + str2;
console.log(str3); // Hello Milind

//Assignment Operators:
let a = 10;
a += 5; // a is now 15 (Add and Assign)
a -= 3; // a is now 12 (Subtract and Assign)

//Comparison Operators:   -----explore more
let num1 = 5;
let num2 = "5";
let isEqual = num1 == num2;
// true (Equal to, does not check data type)
let isStrictEqual = num1 == num2;
// false (Strict Equal to, checks data type)
let isNotEqual = num1 != num2;
// false (Not Equal to)
let isNotStrictEqual = num1 !== num2;
// true (Strict Not Equal to)

//Logical Operators:
let isTrue = true;
let isFalse = false;
let result1 = isTrue && isFalse; 
console.log(result1)  // false (Logical AND)
let result2 = isTrue || isFalse;
console.log(result2) // true (Logical OR)
let result3 = !isTrue;
console.log(result3) // false (Logical NOT)

//Concatenation Operator:
let firstName = "Milind";
let lastName = "Ghegadmal";
let fullName = firstName + " " + lastName;
console.log(fullName);
// "Milind Ghegadmal" (String Concatenation)

//Conditional (Ternary) Operator:
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
// "Yes" (Ternary Operator)

//Typeof Operator:
let value1 = 42;
let valueType = typeof value1;
console.log(value1)
// "number" (Typeof Operator)


console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

// console.log(3 + 4 * 5 % 3);   //Avoid this type of code written

console.log(true); //true
console.log(+true); //1
// console.log(true+); //It will give an Error

console.log(+""); // 0

let n1, n2, num3
n1 = n2 = num3 = 2 + 2

//Operator Precedence:

let result = 2 + 3 * 4; // Result is 14, not 20
//multiplication (*) has higher precedence than addition (+), so it's evaluated first.


//******************/ Prefix and Postfix Operator *************
let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101

let gameCounter1 = 100
++gameCounter1;
console.log(gameCounter1); //101

//Prefix and Postfix Operators:
// Prefix: When an operator appears before a variable or operand, it's called a prefix operator. It performs the operation before using the variable's current value.
// Postfix: When an operator appears after a variable or operand, it's called a postfix operator. It performs the operation after using the variable's current value.

let p = 5;
let q = 5;

let prefixIncrementP = ++p; // Prefix Increment: Add 1 to x, then assign to prefixIncrementX
let postfixIncrementQ = q++; // Postfix Increment: Assign y to postfixIncrementY, then add 1 to y

console.log(prefixIncrementP); // 6
console.log(postfixIncrementQ); // 5


