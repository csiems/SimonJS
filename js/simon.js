var COLORS = ['red', 'yellow', 'green', 'blue'];

function Game() {
  this.sequence = [];
  this.userGuesses = [];
}

Game.prototype.getSequence = function () {
  return this.sequence;
};

Game.prototype.updateSequence = function() {
  var newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  var sequence = this.getSequence();
  sequence.push(newColor);
};

Game.prototype.getUserGuesses = function () {
  return this.userGuesses;
};

Game.prototype.updateUserGuesses = function (guess) {
  var userGuesses = this.getUserGuesses();
  userGuesses.push(guess);
};

Game.prototype.guessMatchesSequence = function () {
  var sequence = this.getSequence();
  var userGuesses = this.getUserGuesses();
  var lastGuessIndex = userGuesses.length - 1;
  return userGuesses[lastGuessIndex] === sequence[lastGuessIndex];
};

exports.Game = Game;
