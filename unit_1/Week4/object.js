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
    constructor (name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight= 0;
        this.mood=0;
        this.hamsters=[];
        this.bankAccount=0;

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
         this.hamsters.push(this.hamsters);
         this.mood++;
         this.bankAccount-= getPrice()
    }
}
    




