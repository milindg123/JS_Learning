// Promises Creation

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()  //used for connection promiseOne and .then
    }, 1000)
})



// Promises Consumption
promiseOne.then(function(){
    console.log('Promise consumed');
})


// Second Promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})


// Third Promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"Chai@example.com"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



// Fourth Promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //(false)
        if(!error){
            resolve({username : "Milind", Password: "Pass@123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=> {

console.log(username); 
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// console.log(username);



// PromiseFive

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "JavaScript", Password: "Js@123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()


// ********************************************************
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

