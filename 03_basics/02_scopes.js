// Scopes --> {}

// var c = 300

// Global Scope 
let a = 300

// block Scope
if(true){
    let a = 10
    const b = 20
    //var c = 30   //avoid var for declaration of the variable
    console.log("INNER : ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scopes

function One(){
    const username = "Milind"

    function Two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); 

    Two()
}
// Execution of function
One()

if(true){
    const username = "milind"
    if(username === "milind"){
        const website =" youtube"
        console.log(username + website)
    }
    // console.log(website);

}

// console.log(username);



// ************** interesting ***********
console.log(addone(5))
function addone(num){
    return num + 1
}
// addone(5)

// addTwo(5) --> we can not acces the function before initialization
const addTwo = function(num){
    return num + 2
}
// addTwo(5)

