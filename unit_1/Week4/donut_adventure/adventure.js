class Hero {
       constructor(name){
       this.name = name
             this.health = 100;
             this.weapons = {
                sprinkleSpray: 5,
               sugarShock: 10
            };
            this.catchPhrase = [`I'm fresher than 3 days old pizza`, `you can't count my calories yo`];
        }
        talkSass(){
            console.log(this.catchPhrase[Math.floor(Math.random()*this.catchPhrase.length)]);
         }
        announceHealth(){
             console.log(this.health)
        }
        fight(enemy){
           const weaponArray = Object.entries(this.weapons)
            const weapon = weaponArray[Math.floor(Math.random()*weaponArray.length)];
             console.log(`I am ready to rumble. I will attack you with my ${weapon[0]}!`)
            console.log(`You've been hit with ${weapon[1]} hit point`)
           enemy.health-= weapon[1]
           console.log(`${enemy.name}'s health is now at ${enemy.health}`)
        }
     }
    const dougie = new Hero("Dougie the donut")
    class Enemy {
        constructor(name){
            this.name = name
            this.health = 100;
            this.weapons = {
               pepperoniStars: 5,
                 cheeseGrease: 10
            };
            this.catchPhrase = [`I'm youtube famous`, `I'm more dangerous than an uncovered sewer`];
        }
         talkSmack(){
            console.log(this.catchPhrase[Math.floor(Math.random()*this.catchPhrase.length)]);
        }
        announceHealth(){
             console.log(this.health)
        }
         fight(hero){
            const weaponArray = Object.entries(this.weapons)
             const weapon = weaponArray[Math.floor(Math.random()*weaponArray.length)];
            console.log(`I'm gonna flatten you like a slice of pepperoni. I will attack you with my ${weapon[0]}!`)
            console.log(`You've been hit with ${weapon[1]} hit points`)
            hero.health-= weapon[1]
             console.log(`${hero.name}'s health is now at ${hero.health}`)
         }
    }
     const pizzaRat = new Enemy("Pizza Rat")
    //Walking the street
    dougie.talkSass()
    pizzaRat.talkSmack()
    dougie.announceHealth()
    pizzaRat.announceHealth()

    // Fight
    pizzaRat.fight(dougie)
    dougie.fight(pizzaRat)
    dougie.announceHealth()
    pizzaRat.announceHealth()