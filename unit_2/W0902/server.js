const express = require('express');
const app = express();
const port = 3000;

//Greetings

// app.get('/greeting/:name', (req, res) => {
// 	res.send(`hello ${req.params.name} it's great to see you finally`);
// });

//Calculator

// app.get('/tip/:total/:tipPercentage', (req, res) => {
    
// res.send(`${req.params.tipPercentage/req.params.total * 100}`);
// });


// Magic 8 Ball
  

const questions = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again l0ater","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


app.get('/:magic', (req, res) => {
let question = questions[req.params.magic] 
res.send("Will I be a millionaire? " +  questions[Math.floor(Math.random()*questions.length)]);


})



app.listen(port, () => {
    console.log(`Express web server loaded and listening on port ${port}`);
  });