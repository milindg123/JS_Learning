
// Truthy values :
// "0" , 'false' , " " , [] , {} , function(){} ,

// false values :

// false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

//String
const userEmail = "m@milind.com"
if(userEmail){
    console.log("Got user email");

}
else{
    console.log("Don't have user email");
}

//Array
const myName = []
if(myName.length === 0){
    console.log("array is empty")
}

//Object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Notes :    
// 1) false == 0;  output: true
// 2) false == ''; output: true
// 3) 0 == '';     output: true



// ********************  Nullish Coalescing Operator (??) :null undefined *************

let val1;
val1 = 5 ?? 10
console.log(val1); //output : 5

let val2;
val2 = null ?? 10
console.log(val2); //output : 10

val3 = undefined ?? 15
console.log(val3)  // output : 15


val4 = null ?? 10 ?? 20
console.log(val4)  //output : 10



// ****************** Ternary Operator *********************

// condition ? true : false


const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")

