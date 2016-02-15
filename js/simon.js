var COLORS = ['red', 'yellow', 'green', 'blue'];

function Game() {
  this.sequence = [];
  this.userGuess = [];
}

Game.prototype.getSequence = function () {
  return this.sequence;
};

Game.prototype.updateSequence = function() {
  var newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  var sequence = this.getSequence();
  sequence.push(newColor);
};

Game.prototype.getUserGuess = function () {
  return this.userGuess;
};

Game.prototype.updateUserGuess = function (guess) {
  var userGuess = this.getUserGuess();
  userGuess.push(guess);
};
