// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); // if we have o write a two IIFE (;) must be present after the one IIFE


// simple IIFE --> Unnamed IIFE
( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
})("Milind")

