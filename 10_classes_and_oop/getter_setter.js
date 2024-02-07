class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}milind`
    }

    set password(value){
        this._password = value  //.toUpperCase()
    }


}

const milind  = new User("Milind@.ai", "123")
console.log(milind.password);
console.log(milind.email);