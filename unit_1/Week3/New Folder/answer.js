//Answer the following

//1. A light switch that can be either on or off.
//data ype: boolean
//data structure: let lightSwitch = true;

//2. A A user's email address.
//data type: string
//data structure: let emailAddress = 'johndoe@gmail.com'

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//data type: array
//data structure: const spaceShip ['hull', 'laster blasters', 'factor beam', 'warp drive]

//4. A list of student names from our class
//data type: array
//data structure: const studentNames = ['Kate', 'John', 'Mike', 'Heather', 'Stan', 'Miguel']

//5. A list of student names from our class, each with a location.
//date type: object
// date structure: 
// const studentsInfo = {
//     Kate: 'Bronx',
//     John: 'Kingstowne',
//     Mike: 'Redondo Beach',
//     Heather: 'D.C',
//     Stan: 'Woodbridge',
//     Miguel: 'Franconia'
// }

//6. 
//data type: object (array within object)
//data structure:
// const studentNamesDetailed = [
//     {name: 'Kate', location: 'Bronx', favTvShow: '24'},
//     {name: 'John', location: 'Kingstowne', favTvShow: 'House Of Cards'},
//     {name: 'Mike', location: 'Redendo Beach', favTvShow: 'Breaking Bad'},
//     {name: 'Heather', location: 'D.C', favTvShow: 'Blue Lagoon'},
//     {name: 'Stan', location: 'Woodbridge', favTvShow: 'Monsters'},
//     {name: 'Kate', location: 'Franconia', favTvShow: 'Black Mirror'},
// ]

/////////////////////////////////////////

//Take it Easy
//1. Make an array that holds all of the colors of the rainbow.
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigot', 'violet'];
// //2. Write code that will access "blue" from the rainbow array.
// console.log(rainbowColors[4])
//3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// const moeInfo = {
//     favoriteFood: 'Sushi',
//     hobby: 'Watching movies',
//     town: 'Alexandria',
//     favDataType: 'objects',
// }

// //4. Write code that will access your hobby from the object that you just created.
// console.log(moeInfo.hobby)

//Crazy Object!
// const crazyObject = {
//     taco: [{meat: 'steak',
//            cheese: ['panela', 'queso', 'chihuahua']},
//            {meat: 'chicken',
//             salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//           ],
//     larry: {
//       nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//       quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//       characters: [{
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//       ]
//     }
//   }
//   //Use crazy Object to log the following.

//   //1."omg my mouth is burning"

//   console.log(crazyObject.taco[1].salsa[5])

//   //2. "Pretty pretty prettayyyyy good"

//   console.log(crazyObject.larry.quotes[0])

//   //3. "Swearing at Larry and Jeff"
//   console.log(crazyObject.larry.characters[2].favourtieHobby)

//   //4. "Chicken Teriyaki Boyyyyyy"

//   console.log(crazyObject.larry.nicknames[1])

//   //5. The object the contains the name funkhauser
//   console.log((crazyObject.larry.characters[1]))

//   //6. Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
//   crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk")
//   console.log(crazyObject.larry.quotes)

//Object-ception
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }
  //1. Change the value of limbo to null
  inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo='null'
  console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)