const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/calculate', (req, res) => {
    const netWorth = parseFloat(req.body.netWorth);
    const currentOdds = parseFloat(req.body.currentOdds) / 100; // Convert percentage to probability
    const myOdds = parseFloat(req.body.myOdds) / 100; // Convert your odds from percentage to probability
    const kellyFraction = parseFloat(req.body.kellyFraction);

    const decimalOdds = 1 / currentOdds;
    // const kellyBet = ((myOdds * (decimalOdds + 1)) - 1) / decimalOdds * netWorth;
    const kellyBet = (myOdds - (1 - myOdds)/(1/currentOdds -1)) * netWorth;
    const adjustedKellyBet = kellyBet * kellyFraction;

    res.render('result', { adjustedKellyBet: adjustedKellyBet.toFixed(2) });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
