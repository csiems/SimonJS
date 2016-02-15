function Game() {
  this.sequence = [];
  this.userGuess = [];
}

Game.prototype.getSequence = function () {
  return this.sequence;
};

Game.prototype.getUserGuess = function () {
  return this.userGuess;
};
