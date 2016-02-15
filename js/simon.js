var COLORS = ['red', 'yellow', 'green', 'blue'];

function Game() {
  this.sequence = [];
  this.userGuesses = [];
  this.turnCount = 0;
}

Game.prototype.getSequence = function () {
  return this.sequence;
};

Game.prototype.updateSequence = function() {
  var newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  var sequence = this.getSequence();
  sequence.push(newColor);
  return sequence;
};

Game.prototype.getUserGuesses = function () {
  return this.userGuesses;
};

Game.prototype.updateUserGuesses = function (guess) {
  var userGuesses = this.getUserGuesses();
  userGuesses.push(guess);
  return userGuesses;
};

Game.prototype.resetUserGuesses = function () {
  console.log('resetting, mothereffers')
  this.userGuesses = [];
  return this.userGuesses;
};

Game.prototype.guessMatchesSequence = function () {
  var sequence = this.getSequence();
  var userGuesses = this.getUserGuesses();

  for (var guessIndex in userGuesses) {
    if (userGuesses[guessIndex] !== sequence[guessIndex]) {
      return false;
    }
  }

  return true;
};

Game.prototype.getTurnCount = function () {
  return this.turnCount;
};

Game.prototype.incrementTurnCount = function () {
  this.turnCount += 1;
  return this.turnCount;
};

exports.Game = Game;
