// variable and constant
//--------------------------------------------------VAR--------------------------------------------------------
//var = it can be re-assigned a value and it can also be declared again  (Global scope)
//=> Never use var in your code instead of let because of block and functional scope issues.
var accountPassword = "12345"

//------------------------------------------------CONST------------------------------------------------------
//const = can't be re-assigned a value and can't be declared again  (block scope)
const accountId = 8081

// accountId = 2   //not allowed because constant can't change

//--------------------------------------------------LET-----------------------------------------------------
//let = can be re-assigned a value but can't be declared again (block scope)
// block scope ex if { scope}, meaning it is limited to the block (e.g., a function or a code section) in which it is defined, and you cannot have multiple variables with the same name in the same scope.
let accountEmail = "milindg2024@gmail.com"


// You can re-assigned a new value to the variable
accountEmail = "abc@gmail.com"

// However, you cannot redeclare it with the same name in the same scope   using let
//let Account_email = "anotheremail@example.com"; // This will result in an error

//-----------------------------------------------------DIRECT----------------------------------------------------

// we can also declare variable without let const var but avoid it
accountPassword = "1267"
accountCity = "Pune"


let accountState; //undefined
console.log(accountId);

//console.table([group of variables you want to show in tabular form])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])