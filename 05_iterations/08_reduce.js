// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator + currentValue
}, 0)

// output :
// accumulator: 0 and currentValue: 1
// accumulator: 1 and currentValue: 2
// accumulator: 3 and currentValue: 3

console.log(myTotal); // output : 6


// Arrow function
const myTotal1 = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
console.log(myTotal1)

// output : 6

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "Data scientist course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);

// output : 25995