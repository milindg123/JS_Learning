console.log(2 > 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0) //false
console.log(null >= 0) //True => null ko convert zero
console.log(null == 0) //false
console.log(null <= 0) //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// Strict Check :  === it will also check the datatype

// Conversion is not possible in strict check

console.log("2" === 2); //false because "2" is String and 2 is number datatype

