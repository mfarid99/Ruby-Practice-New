// class Dog {
//     constructor (name, age, breed) {
//             this.name= name;
//             this.age=age;
//             this.breed=breed;
//     }
//     bark () {
//         console.log('woof')
//     }
    
// }

// const sparky = new Dog ('Spark', 5, 'Shitsu')
// const stark = new Dog ('Stark', 9, 'Terrir')

// console.log(sparky)
// console.log(stark)
// sparky.bark();
// stark.bark();

//Classes & Donut Adventure
//Creating Classes
/////////////////
///Hamster
////////////////

class Hamster {
    constructor (owner, name, price) {
        this.owner = owner; 
        this.name = name; 
        this.price = price;
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        console.log(this.price)
    }
}

const dirtyHamster = new Hamster ('Farid', 'Meme', 25)
console.log(dirtyHamster)
//Hamster { owner: 'Farid', name: 'Meme', price: 25 }
dirtyHamster.getPrice()
//25

/////////////
///Person
//////////// 

class Person {
    constructor (name, age=0, height=0, weight=0, mood=0, hamsters=[], bankAccount=0) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight= weight;
        this.mood=mood;
        this.hamsters=hamsters;
        this.bankAccount=bankAccount;

    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight 
    }
    greet() {
        console.log(name)
    }
    eat() {
        this.weight++;
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp () {
        this.age++,
        this.height++,
        this.weight++,
        this.mood--,
        this.bankAccount+=10
    }
    buyHamster() {
         this.hamsters.push(hamsters);
         this.mood++;
         this.bankAccount-= getPrice()
    }
}

//Create A Story with your Person Class
//1-Instantiate a new Person named Timmy
//2-Age Timmy five years
const newMan = new Person ('Timmy', 5)
console.log(newMan)
//Person {
   // name: 'Timmy',
   //age: 5,
   // height: 0,
    //weight: 0,
    //mood: 0,
    //hamsters: [],
    //bankAccount: 0
  //}
  //3-Have him eat five times.
  newMan.ageUp(5) 
    console.log(newMan)
    //Person {
//   name: 'Timmy',
//   age: 5,
//   height: 0,
//   weight: 1,
//   mood: 1,
//   hamsters: [],
//   bankAccount: 0
// }
//4-Have him exercise 5 times
newMan.exercise(5)
console.log(newMan)
// //Person {
//     name: 'Timmy',
//     age: 5,
//     height: 0,
//     weight: 0,
//     mood: 1,
//     hamsters: [],
//     bankAccount: 0
//   }
//5-Age him 9 years
    newMan.ageUp(9)
    console.log(newMan)
    //Getting wrong age *****
//6-Create hamster named Gus
//7-Set Gus' owner to Timmy
    const anotherHamster = new Hamster ('Timmy','Gus')
    console.log(anotherHamster)
//8-Have Timmy buy Gus
    // buyHamster('Gus')*******wrong need help
    // console.log(anotherHamster)
//Getting error msg
//9-Age Timmy 15 years
    newMan.ageUp(15)
    console.log(newMan)
    //console.log wrong age ***** 
//10-Have Timmy eat twice
newMan.eat(2)
console.log(newMan)
//11- Timmy exercise twice
newMan.exercise(2)
console.log(newMan)




