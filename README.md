# Kelly Criterion Calculator

A web-based calculator that helps determine optimal bet sizes using the Kelly Criterion formula. This tool is particularly useful for investors and bettors who want to optimize their position sizing based on probability and odds.

## What is the Kelly Criterion?

The Kelly Criterion is a mathematical formula used to determine the optimal size of a series of investments or bets. It helps maximize the long-term growth rate of investments by specifying what percentage of your bankroll you should risk based on:
- Your estimated probability of winning
- The odds you're being offered
- Your total bankroll

## Features

- Calculate optimal bet size using the Kelly Criterion
- Adjust bet size using a fractional Kelly approach for more conservative betting
- Simple, user-friendly interface
- Instant calculations

## How to Use

1. Enter your total bankroll/net worth
2. Input the current odds (as a percentage)
3. Enter your estimated probability of winning (as a percentage)
4. Choose your Kelly fraction (1 for full Kelly, 0.5 for half Kelly, etc.)
5. Click calculate to see the recommended bet size

## Formula Used

The calculator uses the standard Kelly Criterion formula:
```
f = (bp - q) / b
```
Where:
- f is the fraction of bankroll to bet
- b is the decimal odds minus 1 (net odds)
- p is your estimated probability of winning
- q is your estimated probability of losing (1 - p)

## Live Demo

The application is deployed and can be accessed at [Heroku App URL].

## Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```
4. Visit `http://localhost:3000` in your browser

## Technologies Used

- Node.js
- Express.js
- EJS templating
- Bootstrap for styling

## Important Note

The Kelly Criterion assumes that your probability estimates are accurate. It's often recommended to use a fractional Kelly approach (betting a fraction of the recommended amount) to be more conservative and account for potential errors in probability estimation. 