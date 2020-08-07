// //Section 2 Combining Datatypes
// //1-Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

// // const crayonBox = {
// //     crayonNames : ['name1', 'name2', 'name3']
// // };
// // console.log(crayonBox.crayonNames[1]);
// //logs name2

// //2-Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

// // const bottle = {
// //     cap : {
// //         properties: 'metal',
// //         color: 'blue',
// //     }
// // }
// // console.log(bottle.cap.color)
// //logs blue

// //3-Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

// // const receipt = [
// //     {
// //         shirt: 'Van Heusen',
// //         price: 25,
// //     }, 
    
// //     {
// //         dress: 'fancy brand',
// //         price: 120,
// //     }
// // ]

// // console.log(receipt[1].dress)
// //logs fancy brand

// //4-Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

// // const apartmentBuilding = [
// //     [ {name: 'Michael'},{name: 'Larry'}, {name: 'Laura'} ],
// //     [{unitA: 'vacant'}, {unitC: 'ocuupied'}, {unitB: 'damaged'}],
// // ]
// // console.log(apartmentBuilding[1][2].unitB)
// //logs damaged

// //Combine objects, arrays, and functions more than one level deep

// //1-Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).


//     // const stuff = {
//     //     knit:() => {
//     //     return {
//     //         item: 'scarf',
//     //         size: '6ft',
//     //     }

//     //     }
//     // }
//     // console.log(stuff.knit().item)
//     //logs scarf
    
    
//     //2-Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

//     // const crayonsMix = {
//     //     crayonSelector: () => {
//     //         return {
//     //             pen1: ['green', 'red', 'purple'],
//     //             pen2: ['black', 'white']
                
//     //         }
//     //     }
//     // }
//     // console.log(crayonsMix.crayonSelector().pen1[0])
//     // //logs green

//     // //3-
//     // const powerButtons = () => {
//     //     return {
//     //          funcSong () {
//     //             return ('select a song')
//     //         }
//     //     }
//     // }
//     // console.log(powerButtons().funcSong())
//     // //logs select a song

//     //Model a Vending Machine Model a vending machine

//     // //a vending machine is an object
//     // const vendingMachine = {
//     // //it has an array of snacks (make 3 snacks)
//     //     snack: [
//     // //snacks are objects that have a name and a price
//     //         {
//     //         snackA: 'M&Ms',
//     //         price: 1.99,
//     //     },

//     //     { 
//     //         snackB: 'chips',
//     //         price: 2,

//     //     }
//     //     ,
//     //     { 
//     //         snackC: 'milk',
//     //         price: 2.50,

//     //     }
//     //     ],
//     //     //a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
//     //     vend (input) {
//     //         console.log(this.snack[input])
//     //     }

//     //     }
//     //     //Be able to call vendingMachine.vend() with a valid integer to return a snack
//     //     vendingMachine.vend(1)
    
//     //Callbacks

//     //1-Make a function add that takes two arguments (numbers) and sums them together

//     // const add = (num1, num2) => {
//     //     return num1 + num2
//     // }
//     // console.log(add(7,9))
//     //logs 16

//     //2-Make a function subtract that takes two arguments (numbers) and subtracts them
//     // const subtract = (num1, num2) => {
//     //     return num1 - num2
//     // }
//     // console.log(subtract(29,5))
//     //logs 24

//     //3-Make a function multiply that takes two arguments and multiplies them
//     // const multiply = (num1,num2) => {
//     //     return num1 * num2
//     // }
//     // console.log(multiply(9, 10))
//     // //logs 90

//     // //4-Make a function divide that takes two arguments and divides them

//     // const divide = (num1,num2) => {
//     //     return num1 / num2
//     // }
//     // console.log(divide(121, 11))
//     //logs 11

//     //5/6/7-Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

    

//     // const calculate = (num1,num2) => {
//     //     num = num1 + num2
//     //     operates = () => {
//     //         console.log(num);
    
//     //     } 
//     //     return operates

//     // }
//     // calculate(operates())

//     //function definition placement
//     //Clean up this code, so that it works and has function definitions in the correct place

//     //wrong code

// //     bar();
// // const bar = () => {
// //     console.log('bar here');
// // }
// // foo();

// // const foo = () => {
// //     console.log('foo here');
// // }

//     //correct code 


//     // const foo = ()=>{
//     //     console.log("foo here");
//     // }
//     // const bar = ()=>{
//     //     console.log("bar here");
//     //     
//     // }
    

//     //error reading

//     //What is meant by the error(s) this produces?
// //     foo();

// //     const foo ()=>{
// //     console.log('hi');
// // }
//     //it is missing initializer in const declaration, so = is needed to make it a function. 

