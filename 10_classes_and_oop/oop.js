const user = {
    username : "Milind",
    loginCount: 10,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username : ${this.username}`)
        console.log(this);
    }
}

console.log(user.username)
// console.log(user.getUserDetails())

console.log(this) //global context --> Empty {}
