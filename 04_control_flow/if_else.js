// if

// if condition is true hten and only then the code is execute under the {}
if(/*condition */ true){

}


const isUserloggedIn = true
const temperature = 41
if(isUserloggedIn){

}

if(temperature === 50){
    console.log("less than 50")
}

else{
    console.log("temperature less than 50 ")
}

// conditions : < , > , <= , >= , == , != strict checking === it will not check just a values it also check its datatype , 
//  !== 


if( 3 != 2){
    console.log("EXECUTED")  // output : EXECUTED
}   


const score = 200

if(score >100){
    let power = "fly"
    console.log(`user power : ${power}`)
}

// scope is not obtained out of the if condition 
// onsole.log(`user power : ${power}`)



// short hand notation

const balance = 1000

//Implicit scope
// if(balance > 500) console.log("test") , console.log("test2");



// if - else if ladder
if(balance < 500){
    console.log("less than ")
}

else if(balance < 750){
    console.log("less than 750")
}

else if(balance < 900){
    console.log("less than 900")
}

else{
    console.log("less than 1200")
}


// Multiple condition check
const userLoggedIn = true
const debitCard = true

// ****************** Logical Operator *******************

// logical && -> Both statements should must true
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

// Logical Or (||) Any one statements should be true 
const loggedInFromGoggle = false
const loggedInFromEmail = true

if(loggedInFromGoggle || loggedInFromEmail){
    console.log("User logged in");
}



