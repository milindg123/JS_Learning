// for...of loop on array

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of /*objects*/ arr){  //objects means hame kis ke upar loops lagana hai
    console.log(num);

}

// output : 
// 1
// 2
// 3
// 4
// 5


// for...of loop On String
const greetings = "Hello World !"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// output :
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is
// Each char is !


//for...of loop on map
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('FR' , "France")

console.log(map);

// output : 
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'FR' => 'France'
//   }


const map1= new Map()
map1.set('IN' , "India")
map1.set('USA' , "United State of America")
map1.set('FR' , "France")
map1.set('IN' , "India")  
//maps are used for unique values here i used two times of India entry but in the result it take only a single entry

console.log(map1);

//output :
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'FR' => 'France'
//   }


for(const [key, value] of map){
    console.log(key, ':-' , value);
}

//output :
// IN :- India
// USA :- United State of America
// FR :- France


// for...of loop on obect (not recommended)
// const myObject = {
//     'game 1' : 'NFS',
//     'game 2' : 'Spiderman'
// }
// for(const [key , value] of myObject){
//     console.log(key, ':-' , value);
// }


//for...In loop on Object
const myObject ={
    js : 'JavaScript',
    cpp : 'c++',
    rb : "ruby",
    swift : "Swift by apple"
}

for(const key in myObject){
    console.log(`${key} : shortcut is for ${myObject[key]}`);
}

// output :
// js : shortcut is for JavaScript
// cpp : shortcut is for c++
// rb : shortcut is for ruby
// swift : shortcut is for Swift by apple


// for...In loop on Array

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(key);
}

//output :
// 0
// 1
// 2
// 3
// 4

for(const key in programming){
    console.log(programming[key]);
}

// output : 
// js
// rb
// py
// java
// cpp

// for...In loop on map
const map3= new Map()
map3.set('IN' , "India")
map3.set('USA' , "United State of America")
map3.set('FR' , "France")
map3.set('IN' , "India") 

for(const key in map){
    console.log(key); 
}

//output: kuch bhi nahi ata --> map can not iterable
