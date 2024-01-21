// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);

//output :
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNumbers.map( (num) => { return num + 10})
console.log(newNums1);
// output :
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//Chaining in map()
const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums2 = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40)
console.log(newNums2);

// output :
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]


// Example of chaining on map
const myNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums3 = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40)
console.log(newNums3);

// output :
// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]




