class Hero {
    constructor (name, health=100, 
        weapons = {
        sprinkleSpray: 5,
        sugarShock: 10
        }) {
    this.name = name;
    this.health = health;
    this.weapons = weapons;
    this.catchPhrases = ['i\'m fresher than day old pizza', 
    'you can\'t count my calories']
        }

    //Methods

    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    //Getting error msg that catchPhrases is not defined

    }

    announceHealth() {
    console.log(this.health)

    }
    fight() {
    console.log('i\'m ready to rumble')
    }
    }

    const Dougie = new Hero ('big rat', 200)

    console.log(Dougie)
    console.log(Dougie.talkSass())
    console.log(Dougie.announceHealth())
    console.log(Dougie.fight())
// console.log(rat.talkSass())
// class Enemy {
//     constructor (name) {
//     this.name = name
//     this. health = 100
//     this.weapons = {
//             pepperoniStars: 5,
//             cheeseGrease: 10    
    
//     }
// }

//     catchPhrases(char2) {
//         console.log(['i\'m youtube famous',
// 'i\'m more dangerous than an uncovered sewer'])
//     }
//     talkSmack(char2) {
//         console.log(this.catchPhrases().random)
//     }
//     announceHealth(char2) {console.log()}
//     ////announceHealth: logs his current health. Unclear
//     }
//     fight(char2) {
//         console.log('i\'m gonna flatten you like a slice of pepperoni!')
//     }

//     class PizzaRat extends Enemy {
        
//     }


