const coding = ["js", "ruby", "py", "java", "c++"]

//callback function  = task to perform 
// call back function don't have name
coding.forEach(  function (val) {  
    console.log(val);
} )

//output :
// js
// ruby
// py
// java
// c++


// Arrow function

coding.forEach( (item) => {
    console.log(item)
} )

// output :
// js
// ruby
// py
// java
// c++

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // here we have only give the reference of the print me fnction
 
// output :
// js
// ruby
// py
// java
// c++


//forEach does not contain only item it also contain the index as well as arr list also 
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

// output :
// js 0 [ 'js', 'ruby', 'py', 'java', 'c++' ]
// ruby 1 [ 'js', 'ruby', 'py', 'java', 'c++' ]
// py 2 [ 'js', 'ruby', 'py', 'java', 'c++' ]
// java 3 [ 'js', 'ruby', 'py', 'java', 'c++' ]
// c++ 4 [ 'js', 'ruby', 'py', 'java', 'c++' ]


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

// output : 
// JavaScript
// Java
// Python