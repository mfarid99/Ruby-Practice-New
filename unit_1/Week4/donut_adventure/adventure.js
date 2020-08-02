class Hero {
    constructor (name) {
    this.name = name
    this.health = 100
    this.weapons =
     {
    sprinkleSpray: 5,
    sugarShock: 10
    }
}
catchPhrases(char1) {
    console.log(['i\'m fresher than day old pizza', 
    'you can\'t count my calories'])
}
talkSass(char1) { 
    console.log(catchPhrases().random)
}
announceHealth(char1) {
    console.log()
    //announceHealth: logs his current health. Unclear
}
fight(char1) {
    console.log('i\'m ready to rumble')
}
}

class Enemy {
    constructor (name) {
    this.name = name
    this. health = 100
    this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
    
    }
}
    catchPhrases(char2) {
        console.log(['i\'m youtube famous',
'i\'m more dangerous than an uncovered sewer'])
    }
    talkSmack(char2) {
        console.log(this.catchPhrases().random)
    }
    announceHealth(char2) {console.log()}
    ////announceHealth: logs his current health. Unclear
    }
    fight(char2) {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
    }

    class PizzaRat extends Enemy {
        
    }


