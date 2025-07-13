const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const resultMessage = document.getElementById('result');


rollButton.addEventListener('click', rollDice);
//for every face there is a unicode used 
const diceFaces = ["\u2685", "\u2686", "\u2687", "\u2688", "\u2689", "\u268A"]; // Unicode characters for dice faces 1-6

function rollDice() {
    //math.random generates a random number between 0 and 1, multiplying by 6 gives a range of 0 to 5, and Math.floor rounds it down to an integer between 0 and 5.
    //Adding 1 to the result gives a range of 1 to 6, which corresponds to the dice faces.
    const randomIndex = Math.floor(Math.random() * 6); 
    dice.textContent = diceFaces[randomIndex];
    resultMessage.textContent = `You rolled a ${randomIndex + 1}!`;
}

