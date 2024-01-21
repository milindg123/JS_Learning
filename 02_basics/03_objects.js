// Singleton objects -> constructors se banega 

// object literals
// Object.create
const mySym = Symbol("key1")
const mySym1 = Symbol("key2")

const JsUser = {
    name : "Milind",
    "full name" : "Milind Ghegadmal",
    mySym : "mykey1",
    [mySym1] : "mykey2",
    age : 22,
    location : "Nashik",
    email : "milind@google.com",
    isLoggedin : false,
    LastLoginDays :["Monday", "Saturday"]
}

// for accesing the elements from the objects
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym1])
// console.log(typeof JsUser[mySym1])

JsUser.email = "milind@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "milind@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)

}

console.log(JsUser.greetingTwo())