let myName = "Milind    "
let myChannel = "SeniorEngineer    "

// console.log(myName.truelength);
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.milind = function(){
    console.log(`milind is present in all object`)
}


Array.prototype.heyMilind = function(){
    console.log(`Milind says hello`);
}
// heroPower.milind()

myHeros.milind()
myHeros.heyMilind()
// heroPower.heyMilind()


// Inheritance

const User ={
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length} `)
}

anotherUsername.truelength()
"Milind".truelength()
"iseTea".truelength()