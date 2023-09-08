
var message = "Hello!";
console.log(message);
message = "Hello from Javascript Basics";
console.log(message);

// if you continuously put a console after a var, it will show the message TWICE, as seen above


// var score = 0;
// score = 10;
// console.log(score);

// as seen above: if you put two variables on top of each other, then one console after, the most recent variable will show only (meaning that 10 will show instead 0)
// score of 10 is overriding the score of 0

var score = 5;
score = score + 10;
score += 5;

var bonusPts = 100;
var finalScore = score + bonusPts;
console.log(finalScore);