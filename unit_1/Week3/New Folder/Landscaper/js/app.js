//LAWNMOWER PROJECT

    //Declare variables
    let purse;
    let teeth;


    //Set initial state
    const start = () => {
        teeth = 1;
        purse = 0;
        askForAction();
        
    }

    const showStatus = () => {
        alert('You have ' + '$' + purse);
    }

    const askForAction = () => {
        showStatus();
        const choice = prompt ("What do you want to do?", "Cut grass/buy tool/restart");
        if (choice === 'Cut grass') {
            earnMoney();
        } else if (choice ==='buy tool') {
            buyTool(); 
        } else if (choice === 'restart') {
            start()
        }

    }

    const earnMoney = () => {
        const toolChoice = prompt ("what tool to use", "teeth/scissors/lawnmower/power lawnmower/starving students")
        if (toolChoice === "teeth") {
            askForAction(purse+=1) }
         else if (toolChoice === "scissors") {
        askForAction(purse+=5);
         } else if (toolChoice === "lawnmower") {
         askForAction(purse+=50); 
         } else if (toolChoice === "power lawnmower") {
            askForAction(purse+=100); 
         }else if(toolChoice === "starving students") {
             askForAction(purse+=250)
         }
        
    }
    

    const buyTool = () => {
        const bestBuy = prompt ("what tool to buy", "scissors/lawnmower/power lawnmower, starving students")
        if (bestBuy === "scissors" && purse >4) {
            askForAction(purse -=5) 
        }
        else if (bestBuy ==='lawnmower' && purse > 24) {
            askForAction(purse -=25)
        }
        else if(bestBuy === 'power lawnmower' && purse > 249) {
            askForAction(purse-=250)
        }
        else if(bestBuy === 'starving students' && purse > 499) {
            askForAction(purse-=500)
        }
    }
    
    
start();
    
    
    
