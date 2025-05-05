// Word bank
const words = ['javascript', 'developer', 'programming', 'function', 'variable', 
    'algorithm', 'database', 'network', 'website', 'browser'];

// Game variables
let currentWord = '';
let scrambledWord = '';

// DOM elements
const scrambledWordElement = document.getElementById('scrambledWord');
const userGuessInput = document.getElementById('userGuess');
const checkButton = document.getElementById('checkButton');
const refreshButton = document.getElementById('refreshButton');
const feedbackElement = document.getElementById('feedback');

// Initialize the game
initGame();

// Event listeners
checkButton.addEventListener('click', checkAnswer);
refreshButton.addEventListener('click', initGame);

// Functions
function initGame() {
// Select a random word
currentWord = words[Math.floor(Math.random() * words.length)];

// Scramble the word
scrambledWord = scrambleWord(currentWord);

// Display scrambled word
scrambledWordElement.textContent = scrambledWord;

// Clear previous feedback and input
feedbackElement.textContent = '';
feedbackElement.className = 'feedback';
userGuessInput.value = '';
userGuessInput.focus();
}

function scrambleWord(word) {
// Convert word to array
let letters = word.split('');

// Fisher-Yates shuffle algorithm
for (let i = letters.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[letters[i], letters[j]] = [letters[j], letters[i]];
}

// Return as string
return letters.join('');
}

function checkAnswer() {
const userGuess = userGuessInput.value.trim().toLowerCase();

if (userGuess === currentWord) {
feedbackElement.textContent = 'Correct! Well done!';
feedbackElement.className = 'feedback correct';

// Start a new game after a delay
setTimeout(initGame, 2000);
} else {
feedbackElement.textContent = 'Try again!';
feedbackElement.className = 'feedback incorrect';
}
}