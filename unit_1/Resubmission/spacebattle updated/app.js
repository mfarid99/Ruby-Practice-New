
//set variables
let alienSpaceShips = [];
let human; 

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
        alert(
          `The ${this.name} has successfully hit and has done ${this.firepower} damage to ${enemy.name}.`
        );
        enemy.hull -= this.firepower;
        if (enemy.hull <= 0) {
          alert(`${enemy.name} has been destroyed!`);
          alienSpaceShips.shift();
          if (alienSpaceShips.length === 0 || human.hull <= 0) {
            gameOver();
          }
        } else {
          this.showStatus(enemy);
        }
      } else {
        alert(`${this.name} missed ${enemy.name}`);
      }
    }
    showStatus(enemy) {
      alert(`${enemy.name}'s hull is now at ${enemy.hull}`);
    }
  }
  const generateShips = () => {
    for (let i = 1; i <= 6; i++) {
      let aliens = new SpaceShip(`AlienShip ${i}`);
      alienSpaceShips.push(aliens);
    }
    human = new SpaceShip("USS Enterprise", 20, 5, 0.7);
  };
  const start = () => {
    generateShips();
    alert(
      `You are the captain of the ${human.name}. ${alienSpaceShips.length} alien ships approach, get ready to battle!`
    );
    askPrompt();
  };
  //Getting users input
  const askPrompt = () => {
    let userInput = prompt(
      `${alienSpaceShips[0].name} is ready to fight! What would you like to do? fight/retreat`
    ).toLowerCase();
    if (userInput === "fight") {
      human.fight(alienSpaceShips[0]);
      alienSpaceShips[0].fight(human);
    } else if (userInput === "retreat") {
      retreat();
    } else {
      alert("Please enter valid response: fight/retreat");
      askPrompt();
    }
    askPrompt();
  };
  //check who wins and allows a restart or end game
  const gameOver = () => {
    if (alienSpaceShips.length === 0) {
      alert(
        "CONGRATS you beat all alien ships and have succefully defended your planet!!"
      );
    } else if (human.hull <= 0) {
      alert("Oh no! The aliens have beat you this time! Game over.");
    }
    let userInput = prompt("Would you like to play again? y/n").toLowerCase();
    if (userInput === "y") {
      restart();
    } else if (userInput === "n") {
      prompt.close();
    } else {
      alert("Please enter a valid response: y/n");
      gameOver();
    }
  };
  //resting all the ships values since we altered them throught the game
  const restart = () => {
    human.hull = 20;
    alienSpaceShips = [];
    start();
  };
  start();