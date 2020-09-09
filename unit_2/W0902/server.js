const express = require('express');
const app = express();
const port = 3000;



// app.get('/greeting/:name', (req, res) => {
// 	console.log(req.params);
// 	res.send(`hello ${req.params.name} it's great to see you finally`);
// });

// app.get('/tip/:total/:tipPercentage', (req, res) => {
    
// res.send(`${req.params.tipPercentage/req.params.total * 100}`);
// });



  

const questions = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again l0ater","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


app.get('/:magic', (req, res) => {
let question = questions[req.params.magic] 
// const randomsness = (questions) => {
// return questions [Math.floor(Math.random()*questions.length)]
// }

    // let question = "Will I be a Millionaire";
    res.send(questions[Math.floor(Math.random()*questions.length)]);


})



app.listen(port, () => {
    console.log(`Express web server loaded and listening on port ${port}`);
  });