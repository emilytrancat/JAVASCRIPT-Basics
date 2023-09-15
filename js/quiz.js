/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;

// 2. Store the rank of a player
let rank= "";

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const questOne = prompt("What is my birth month?");
if (questOne.toUpperCase() === 'MARCH') {
    score += 1;
}
const questTwo = prompt("What is my favorite food?");
if (questTwo.toUpperCase() === 'POTATO') {
    score += 1;
}
const questThree = prompt("What kind of pet do I have?");
if (questThree.toUpperCase() === 'CAT') {
    score += 1;
}
const questFour = prompt("What is my favorite color?");
if (questFour.toUpperCase() === 'BLUE') {
    score += 1;
}
const questFive = prompt("What is my name?");
if (questFive.toUpperCase() === 'EMILY') {
    score += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( score === 5 ) { 
    rank = "Gold";
} else if ( score === 3 || score === 4 ) {
    rank = "Silver";
} else if ( score === 1 || score === 2 ) {
    rank = "Bronze";
} else if ( score === 0 ) {
    rank = "None";
}


// 6. Output results to the <main> element
main.innerHTML = `
<h2>You got ${score} out of 5 correct.</h2>
<p>Crown earned: ${rank}.</p>`
