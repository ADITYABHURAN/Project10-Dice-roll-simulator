const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const resultMessage = document.getElementById('result');


rollButton.addEventListener('click', rollDice);

const diceFaces = ["\u2685", "\u2686", "\u2687", "\u2688", "\u2689", "\u268A"]; // Unicode characters for dice faces 1-6

function rollDice() {
    const randomIndex = Math.floor(Math.random() * 6);
    dice.textContent = diceFaces[randomIndex];
    resultMessage.textContent = `You rolled a ${randomIndex + 1}!`;
}

