function sayMyName(){
console.log("M");
console.log("I");
console.log("L");
console.log("I");
console.log("N");
console.log("D");

}

// sayMyName
//                     parameters
function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

//           Arguments
addTwoNumbers(3, 4) //output : 7

addTwoNumbers(3, "4") // output : 34 
addTwoNumbers(3, null) // output : 3
addTwoNumbers("3", 4) // output : 34


function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
const result = addTwoNumbers(3, 4)

console.log("Result: ", result); //output : Result:  undefined


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result  //result ke bad kuch bhi return nahi hoga
    // console.log("Milind");

    return number1 + number2
}


function loginUserMessage(username = "sam"){

    // if(username === undefined)
    if(!username){
        console.log("Please enter a username");
        return  //return ke bad kuch bhi return nahi hota
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Milind")) //output : Milind just logged in
console.log(loginUserMessage("Hitesh"))//output : just logged in
console.log(loginUserMessage()) //output :undefined just logged in

// Rest Operator (...)  / spread operator(...)
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500)) //output : [ 200, 400, 500 ]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500,2000)) //output :  [ 500, 2000 ] //val1 = 200, val2 = 400

const user = {
    username : "milind",
    price : 199
}

function handleObject(anyobject){
    console.log(`Usrname is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) //output : Usrname is milind and price is 199

handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(/*myNewArray*/[200,300,400,600])) // output : 300

