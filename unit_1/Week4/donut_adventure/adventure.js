    class Hero {
    constructor (name) {
    this.name = name;
    this.health = 100;
    this.weapons = [
        {
            name: 'sprinkleSpray',
            hp: 5,
        },
        {
            name:  'sugarShock',
            hp: 10,
        }
        ];
    this.catchPhrases = ['i\'m fresher than day old pizza', 
    'you can\'t count my calories']
        }

    //Methods

    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)])

    }

    announceHealth() {
    console.log(this.health)

    }
    randomGenerator(array) {
        return Math.floor(Math.random()*array.length)  

    }

    randomWeapon() {
        return this.weapons[this.randomGenerator(this.weapons)]

    }

    fight(enemy) {
        let weapon = this.randomWeapon()
        enemy.health //determent by the hero weapon being used
    console.log('i\'m ready to rumble')
    }
    }

    const Dougie = new Hero 

    


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
        return this.weapons.pepperoniStars
    }
    }

    const PizzaRat= new Enemy 
    
    // Walking Down the Street

    //1-Have Dougie talkSass
    // console.log(Dougie.talkSass())
    // //2-Have Pizza Rat talkSmack
    // console.log(PizzaRat.talkSmack())
    // //3-Dougie announces health
    // console.log(Dougie.announceHealth())
    // //4-Have Pizza Rat announceHealth
    // console.log(PizzaRat.announceHealth())

    //Fight!!
    //1-Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
    //Update: fight() {console.log('i\'m gonna flatten you like a slice of pepperoni!')
    //return this.weapons.pepperoniStars } }
    // console.log(PizzaRat.fight())

    //2-Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat)) 
    //Need Help 
    /*3-Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.
    Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
    Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
    Need Help */
    
    

    
