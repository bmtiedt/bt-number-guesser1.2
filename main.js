var randomGuess = document.getElementById('numberGuess');
var guessButton = document.querySelector('.guess');
var min = parseInt(document.getElementById('userMinNumber').value) || 1;
var max = parseInt(document.getElementById('userMaxNumber').value) || 100;
var randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

guessButton.addEventListener('click', function() {
  previousUserGuess.innerText = randomGuess.value;
  document.querySelector('.clear').disabled = false;
  submitGuess();
});

function submitGuess() {
  document.querySelector('.reset').disabled = false;
  document.getElementById('instruction').innerText = 'Your previous guess was...';
  if (parseInt(randomGuess.value) === randomNumber) {   
    randomNumber = generateRandomNumber();
    return document.getElementById('js-message').innerText = 'Oh SNAP!!!!';
  }
  if (parseInt(randomGuess.value) < min || parseInt(randomGuess.value) > max || isNaN(parseInt(randomGuess.value))) {
    document.getElementById('instruction').innerText = 'This number is not within range';
      return document.getElementById('js-message').innerText = 'Please choose a valid number!';
  }
  if (parseInt(randomGuess.value) > randomNumber) {
    document.getElementById('js-message').innerText = 'Sorry, that guess is too high. Try a lower number.';
      return document.getElementById('numberGuess').value='';
  }
  if (parseInt(randomGuess.value) < randomNumber) {
    document.getElementById('js-message').innerText = 'Sorry, that guess is too low. Try a higher number.';
      return document.getElementById('numberGuess').value='';
  }
};

function clearNumber() {
  document.getElementById('numberGuess').value = '';
}

function clearFields() {
  document.getElementById('js-message').innerText = '';
  document.getElementById('numberGuess').value = '';
  document.getElementById('previousUserGuess').innerText = '';
  document.querySelector('.clear').disabled = true;
  document.querySelector('.reset').disabled = true;
}

function resetNumber() {
  document.getElementById('instruction').innerText = 'Make a guess between 1 and 100';
  clearFields();
  document.getElementById('userMinNumber').value = '';
  document.getElementById('userMaxNumber').value = '';
  min = parseInt(document.getElementById('userMinNumber').value) || 1;
  max = parseInt(document.getElementById('userMaxNumber').value) || 100;
  generateRandomNumber();
}

//PLAYERS RANGE
function submitUserNumbers() {
  document.getElementById('instruction').innerText = 'Make a guess between your selected numbers';
  clearFields();
  min = parseInt(document.getElementById('userMinNumber').value) || min;
  max = parseInt(document.getElementById('userMaxNumber').value) || max;
  if (min > max) {
    return document.getElementById('js-message').innerText = 'Not a valid range';
  }
  enableBtn();
  randomNumber = generateRandomNumber();
}

//ENABLE VREAL AND RESET BUTTON WITH INPUT
function enableBtn() {
  document.getElementById('numberGuess').value != '';
  document.querySelector('.clear').disabled = false;
  return document.querySelector('.reset').disabled = false;
};
