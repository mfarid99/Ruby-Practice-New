
//set variables
let bigHeads;
let darkShip = []; //create the array where alienship 1-6 will be created

//creating the class for spaceship as blueprint for all ships
class SpaceShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    //setting the attributes for the constructor
    this.hull = hull || Math.floor(Math.random() * 4) + 3;
    this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
    this.accuracy = accuracy || (Math.floor(Math.random() * 3) + 6) / 10;
  
  
  }
  //The function that sets up the fight
  fight(enemy) {
      //randomizing the accuracy of fire
      if (Math.random() < this.accuracy) {
      console.log(
        //Showing the hitpoints to spaceship
        `${this.name} caused ${this.firepower} hit point damage to ${enemy.name}`
      );
      //deducting firepower from enemy hull
      console.log(`${enemy.name} Firepower = ` + (enemy.hull -= this.firepower));

      if (enemy.hull <= 0) {
          //messages when ship has been destroyed
          console.log(`${enemy.name} has already been destoryed`);
          //removing an enemy ship after it is destroyed
          darkShip.shift();
          console.log(darkShip);
          //showing stat of hull
          console.log(`hull is ${enemy.hull}`);
      
      }
        //if stmt to show critical damage when hull is below 5
      if (enemy.hull <= 5) {
          console.log(`${enemy.name} damage is critical`)
      }

      } else {
        //if no condition met, log out "missed"
      console.log(`${this.name} missed`);
      }
    
    
  }
  

  }
//for loop to generate enemy ships and input them in the array
for (let i = 1; i <= 6; i++) {
  bigHeads = new SpaceShip(`darkShip ${i}`);
  darkShip.push(bigHeads);
}
//creating hero ship based on Spaceship class
const hero = new SpaceShip("motherShip", 20, 5, 0.7);





console.log(darkShip[1]);
console.log(darkShip[1].fight(hero));
console.log(hero.fight(darkShip[1]));
console.log(darkShip[2]);
console.log(darkShip[2].fight(hero));
console.log(hero.fight(darkShip[2]));
console.log(darkShip[3]);
console.log(darkShip[3].fight(hero));
console.log(hero.fight(darkShip[3]));
onsole.log(darkShip[4]);
console.log(darkShip[4].fight(hero));
console.log(hero.fight(darkShip[4]));
onsole.log(darkShip[5]);
console.log(darkShip[5].fight(hero));
console.log(hero.fight(darkShip[5]));
onsole.log(darkShip[6]);
console.log(darkShip[6].fight(hero));
console.log(hero.fight(darkShip[6]));