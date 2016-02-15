describe("Game", function() {
  it("will instantiate with an empty sequence", function() {
    var testGame = createTestGame();
    expect(testGame.getSequence()).to.be.empty; // jshint ignore:line
  });

  it("will instantiate with an empty user guess array", function() {
    var testGame = createTestGame();
    expect(testGame.getUserGuess()).to.be.empty; // jshint ignore:line
  });
});

var createTestGame = function() {
  return new Game();
};
