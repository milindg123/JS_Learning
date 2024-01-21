// ************** Primitive Datatypes *********

/* 7 types : 
-->Input     -> Output
1.String     => string  -->call by value => copy karke dete hai/ copy me changes hote hai original data mai nahi 
2. Number    => number
3. Boolean   => boolean
4. null      => object
5. undefined => undefined
6. Symbol    => symbol   -->value ko unique banane ke liye used karte hai
7. BigInt    => bigint

*/

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');
console.log(id === anotherId);


const bigNumber = 345678343894589n;


/* *********** Reference (Non primitive DataTypes) **************
//non primitive
// refrence
//call by value :  whenever we copy it from anywhere its orignal data refrence is not given to you

//it just give you the copy seprately // functional scope
// and your changes will be done in copy


1. Array => object
2. Object => object
3. Functions => function object

*/

// ex. of array
const heros = ["shaktiman", "naagraj", "doga"]

// ex. of Objects
let myObj = {
    name : "Milind",
    age : 21,
}

// ex. of function
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);


// **************************** Memory ****************

// Stack (primitive)--> Copy milta hai, Heap (Non-Primitive)--> original data mai change

let myYoutubename = "seniorengineerdotcom"

let anotherName = myYoutubename;  //same value gheil
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);


let userOne = {
    email : "user@google.com"
}

let userTwo = userOne;

userTwo.email = "Milind@google.com"  //here i changes the userTwo email means userOne mail also change to new email
                                     // and when i call userOne as well as userTwo by using call by reference it will be same as in the heap memory

console.log(userOne.email);
console.log(userTwo.email);

