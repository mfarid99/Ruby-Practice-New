////////////////////////////////
//Easy Going
// for (let a = 1; a<=20; a++) {
//     console.log(a)
// }
//////////////////////////////// 

////////////////////////////////
//Get Even
///////////////////////////////
// for (let b = 0; b<=200; b+=2){
//     console.log(b)
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for (c = 0; c<=100; c++) {
//     if (c % 3 === 0 && c % 5 ===0 ) {
//         console.log('FizzBuzz')
//     }
//     else if (c % 3 ===0) {
//         console.log('Fizz');
//     }
//     else if (c % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {console.log(c)}
// }

///////////////////////////////
// Wild Wild Life
///////////////////////////////

// 1-Plantee just had her birthday; change Plantee's array to reflect her being a year older.
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
plantee[2] += 1;

//2-Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
wolfy[3] = 'Gotham City'
console.log(wolfy)

//3-Give D'Art a second hometown by adding "Hawkins"
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
dart.splice (4, 0, 'Hawkins')
console.log(dart)

//4-Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

wolfy.splice(0, 1, 'Gameboy')
console.log(wolfy)