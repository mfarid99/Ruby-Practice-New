    // class Hero {
    // constructor (name) {
    // this.name = name;
    // this.health = 100;
    // this.weapons = {
    //     sprinkleSpray: 5,
    //     sugarShock: 10
    //     };
    // this.catchPhrases = ['i\'m fresher than day old pizza', 
    // 'you can\'t count my calories']
    //     }

    // //Methods

    // talkSass() {
    //     console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])

    // }

    // announceHealth() {
    // console.log(this.health)

    // }
    // fight() {
    // console.log('i\'m ready to rumble')
    // }
    // }

    // const Dougie = new Hero ('big rat', 200)

    // console.log(Dougie)
    // console.log(Dougie.talkSass())
    // console.log(Dougie.announceHealth())
    // console.log(Dougie.fight())


class Enemy {
    constructor (name) {
    this.name = name,
    this.health = 100,
    this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10 } ,
    this.catchPhrases = ['i\'m youtube famous',
    'i\'m more dangerous than an uncovered sewer']
    
    }

    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])
    }

    announceHealth() {console.log(this.health)
   
    }
    
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
    }
    }

    const wahoo = new Enemy ('Fawzi')
    console.log(wahoo)
    console.log(wahoo.fight())
