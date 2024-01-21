const user = {
    username : "milind",
    price : 999,

    welcomeMessage: function(){
        // this keyword is used for current context (value)
        console.log(`${this.username} , welocme to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this) ; //output : {}


function chai(){
    console.log(this);
}

chai()   // output : <ref *1> Object [global] {
                    //     global: [Circular *1],
                    //     clearImmediate: [Function: clearImmediate],      
                    //     setImmediate: [Function: setImmediate] {
                    //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
                    //     },
                    //     clearInterval: [Function: clearInterval],        
                    //     clearTimeout: [Function: clearTimeout],
                    //     setInterval: [Function: setInterval],
                    //     setTimeout: [Function: setTimeout] {
                    //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
                    //     },
                    //     queueMicrotask: [Function: queueMicrotask],      
                    //     structuredClone: [Function: structuredClone],    
                    //     atob: [Getter/Setter],
                    //     btoa: [Getter/Setter],
                    //     performance: [Getter/Setter],
                    //     navigator: [Getter],
                    //     fetch: [Function: fetch],
                    //     crypto: [Getter]
                    // }

function chai1(){
    let username = "milind"
    console.log(this.username);
}
                    
chai1()  //output : undefined --> Function ke andar hum this keyword nahi use kar sakte


const chai2 = function(){
    let username = "milind"
    console.log(this.username);
}

chai2()  // output : undefined



const chai3 = () =>{
    let username = "milind"
    console.log(this.username);
}

chai3() // output : undefined


// pure arrow function
// explicitly return
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 3)) // output : 5


// Implicit return --> not used {}
const add_Two = (num1, num2) => num1 + num2
console.log(add_Two(2,4))

const addTwo_ = (num1, num2) => (num1 + num2)
console.log(addTwo_(2,4))

// explicitly return
const AddTwo = (num1, num2) => ({username : "Milind"})
console.log(AddTwo(3, 4)) // output : { username: 'Milind' }



// Example
const myArray = [2,3,4,5,6,7]

myArray.forEach(() =>{})