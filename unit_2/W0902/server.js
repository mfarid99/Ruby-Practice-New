const express = require('express');
const app = express();
const port = 3000;



// app.get('/greeting/:name', (req, res) => {
// 	console.log(req.params);
// 	res.send(`hello ${req.params.name} it's great to see you finally`);
// });

app.get('/tip/:total/:tipPercentage', (req, res) => {
    
res.send(`${req.params.tipPercentage/req.params.total * 100}`);
});





app.listen(port, () => {
    console.log(`Express web server loaded and listening on port ${port}`);
  });