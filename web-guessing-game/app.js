// Game state
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM elements
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('reset-button');

// Check guess function
function checkGuess() {
  const guess = parseInt(guessInput.value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100!';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = '#2ecc71';
    submitButton.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = '#e74c3c';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = '#e74c3c';
  }

  guessInput.value = '';
  guessInput.focus();
}

// Reset game function
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = '';
  message.textContent = '';
  attemptsDisplay.textContent = 'Attempts: 0';
  submitButton.disabled = false;
  message.style.color = '#2c3e50';
}

// Event listeners
submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

// Allow pressing Enter to submit
guessInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkGuess();
  }
});