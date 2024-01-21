// Singleton

// const tinderUser = new Object()  --> Singleton objects  // output : {}

const tinderUser = {} // Non singleton objects

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);  //output : { id: '123abc', name: 'Sam', isLoggedIn: false }

  
const regularUser = {
    email : "abc@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Milind",
            lastname : "Ghegadmal"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1 , obj2)
console.log(obj3);

const obj4 = Object.assign({},obj1 , obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5)


const users = [
    {

    },
    {
    },
    {
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// Property
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// De-Structuring
const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor } = course

// console.log(courseInstructor); //output : hitesh
console.log(instructor); //output : hitesh


// API -> JSON format

// Objects format API

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }


// Array format API

[
    {},
    {},
    {}
]


