// Arrays
// C0llection of multiple elements in a single variable
// Resizable

const myArr = [0, 1, 2, 3, 4, 5]

// Accessing the array elements
console.log(myArr[2])

// We can't access array elements this type
console.log(myArr["one"])


const myHeroes = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)


// Array Methods

// push
myArr.push(6)
myArr.push(7)
console.log(myArr);

// pop  
// pop method we can not passed any arguments it simply remove the last elements of the array
myArr.pop()
console.log(myArr);

// unshift
// all values are shifted and the elements are push at the begining of the array
myArr.unshift(9)
console.log(myArr);

// shift
// all values shifted & the first elements remove from the array
myArr.shift()
console.log(myArr);

// includes
// datatypes
console.log(myArr.includes(9)); //output : false

// indexOf
console.log(myArr.indexOf(9)); // output : -1 (if the values does not exists in the array then the result is -1)
console.log(myArr.indexOf(5)); // output : 5

// join
// join convert the array into the String datatypes
const newArr = myArr.join()
console.log(myArr)  // output : [
                                //     0, 1, 2, 3,
                                //     4, 5, 6
                                // ]
console.log(newArr); // output : 0,1,2,3,4,5,6
console.log(typeof newArr); // output : String


// slice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr)

//Splice 

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myn2);