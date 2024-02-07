//new keyword --> constructor function --> every time it will give new instance

// 1. new object create
// 2. constructor function call due to new keyword
// 3. this keyword argument injected in the new keyword
// 4. function ke andar mil jate hai hame 


// const promiseONe = new Promise()  
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Milind", 12, true)
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne.constructor)
// console.log(userTwo)