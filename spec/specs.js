describe("Game", function() {
  it("will instantiate with an empty sequence", function() {
    var testGame = createTestGame();
    expect(testGame.getSequence()).to.be.empty; // jshint ignore:line
  });

  it("will instantiate with an empty user guess array", function() {
    var testGame = createTestGame();
    expect(testGame.getUserGuess()).to.be.empty; // jshint ignore:line
  });

  describe('prototype.updateSequence()', function() {
    it('will add a new random color to the game sequence', function() {
      var testGame = createTestGame();
      testGame.updateSequence();
      expect(testGame.getSequence().length).to.equal(1);
    });
  });

  describe('prototype.updateUserGuess()', function() {
    it('will add a guess to the user guess array', function() {
      var testGame = createTestGame();
      testGame.updateUserGuess('red');
      expect(testGame.getUserGuess()).to.eql(['red']);
    });
  });
});

var createTestGame = function() {
  return new Game();
};
