//Syntax of Switch case :

// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }


const month = 3
//cases with numbers like (case 1: ) ,(case 2 :)
switch(month){
    case 1:
        console.log("January")
    break;

    case 2:
        console.log("Feb")
    break;

    case 3:
        console.log("March")
    break;                      //break : control flow ko break kar deta hai except default case

    case 4:
        console.log("April")
    break;

    default:
        console.log("Default case match");
        break;
}

// We can also give the string as case like (case "january": )
const months = 3

switch(months){
    case "January" :
        console.log("January")
    break;

    case "Feb":
        console.log("Feb")
    break;

    case "March":
        console.log("March")
    break;                      //break : control flow ko break kar deta hai except default case

    case "April":
        console.log("April")
    break;

    default:
        console.log("Default case match");
        break;
}


