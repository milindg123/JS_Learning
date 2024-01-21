const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Push
// marvel_heros.push(dc_heros) // output : [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // output : flash

// Concat
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// spread
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //output : [
                                            //     1, 2, 3, 4, 5,
                                            //     6, 7, 6, 7, 4,
                                            //     5
                                            // ]

// isArray
console.log(Array.isArray("Milind")) //Output : false 

// from
console.log(Array.from("Milind"))  //output :  [ 'M', 'i', 'l', 'i', 'n', 'd' ]    
console.log(Array.from({name: "Milind"})) //Interesting case --> output: []  (it will give an empty array)

//of
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //output : [ 100, 200, 300 ]

