// //PART I - HTML & CSS

// //I rank myself at 3 "almost feel like I ve got it"

// ///////////////////////////////////

// //PART II

// // ////////////////////////////////
// // //Easy Going
// ///////////////////////////////////
// for (let a = 1; a<=20; a++) {
//     console.log(a)
// }


// // ////////////////////////////////
// // //Get Even
// // ///////////////////////////////
// for (let b = 0; b<=200; b+=2){
//     console.log(b)
// }

// // ////////////////////////////////
// // // Fizz Buzz
// // ////////////////////////////////

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

// // ///////////////////////////////
// // // Wild Wild Life
// // ///////////////////////////////

// // // 1-Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// plantee[2] += 1;

// // //2-Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// wolfy[3] = 'Gotham City'
// console.log(wolfy)

// // //3-Give D'Art a second hometown by adding "Hawkins"
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// dart.splice (4, 0, 'Hawkins')
// console.log(dart)

// // //4-Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

// wolfy.splice(0, 1, 'Gameboy')
// console.log(wolfy)

// // ///////////////////////////////
// // //Yell At The Ninja Turtles
// // ///////////////////////////////

// //Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// // Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

// ninjaTurtle = ["Donatello", "Leonardo", "Raphael" , "Michaelangelo"]

// for (let q=0; q<ninjaTurtle.length; q++) {
// eachNinja = ninjaTurtle[q];
// console.log(eachNinja.toUpperCase())
// }





// // ///////////////////////////////////
// // // METHODS REVISITED
// // ////////////////////////////////// 

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// //console log Titanic
// console.log(favMovies[8])
// //.sort
// favMovies.sort();
// console.log(favMovies)
// //.pop
// favMovies.pop();
// console.log(favMovies)
// //.push Guardians
// favMovies.push('Guardians Of The Galaxy')
// console.log(favMovies)
// //.reverse
// favMovies.reverse()
// console.log(favMovies)
// //.shift
// favMovies.shift()
// console.log(favMovies)
// //.unshift
// favMovies.unshift()
// console.log(favMovies)
// //.splice
// console.log(favMovies.indexOf('Django Unchained'))
// favMovies.splice(14,14, 'Avatar')
// console.log(favMovies)
// //.slice last half of array
// console.log(favMovies.length)
// favMovies.slice(8,15)
// console.log(favMovies)

// ////////////////////////////////
// // Where is Waldo
// ////////////////////////////////

// // //Remove Eggbert 

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)

// // //Change Neff to No One

//  whereIsWaldo [1] [2]= "No One"
//  console.log(whereIsWaldo)

// //  //access + console log Waldo
// console.log(whereIsWaldo [2] [1] [1])


// //////////////////////////////////////
// // Excited Kitten
// /////////////////////////////////////

// //Array of Talking Points

// const catTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ];


// for (let i = 0; i < 20; i++){
  
//  console.log("Love me, pet me! HSSSSSSSS");
//  if ( i % 2 === 0 )
//  {
//    let talkingPoints = Math.floor(Math.random()* (catTalk.length));
//    console.log(catTalk[talkingPoints]);
//  } 
// }

// /////////////////////////////////
// //Find Median
// /////////////////////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// nums.sort()
// console.log(nums)
// console.log(nums[Math.floor(nums.length/2)])


