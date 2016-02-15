describe("Game", function() {
  it("will instantiate with an empty sequence", function() {
    var testGame = createTestGame();
    expect(testGame.getSequence()).to.be.empty; // jshint ignore:line
  });

  it("will instantiate with an empty user guess array", function() {
    var testGame = createTestGame();
    expect(testGame.getUserGuesses()).to.be.empty; // jshint ignore:line
  });

  describe('prototype.updateSequence()', function() {
    it('will add a new random color to the game sequence', function() {
      var testGame = createTestGame();
      testGame.updateSequence();
      expect(testGame.getSequence().length).to.equal(1);
    });
  });

  describe('prototype.updateUserGuesses()', function() {
    it('will add a guess to the user guess array', function() {
      var testGame = createTestGame();
      testGame.updateUserGuesses('red');
      expect(testGame.getUserGuesses()).to.eql(['red']);
    });
  });

  describe('prototype.resetUserGuesses()', function() {
    it('will reset the user guesses', function() {
      var testGame = createTestGame();
      testGame.updateUserGuesses('red');
      testGame.resetUserGuesses();
      expect(testGame.getUserGuesses()).to.eql([]);
    });
  });

  describe('prototype.guessMatchesSequence()', function() {
    it('will compare the simon sequence up to the user guess sequence', function() {
      var testGame = createTestGame();
      testGame.updateSequence();
      testGame.updateUserGuesses(testGame.getSequence()[0]);
      expect(testGame.guessMatchesSequence()).to.be.true; // jshint ignore:line
      testGame.updateSequence();
      testGame.updateUserGuesses(testGame.getSequence()[1]);
      expect(testGame.guessMatchesSequence()).to.be.true; // jshint ignore:line
      testGame.updateSequence();
      testGame.updateUserGuesses('purple');
      expect(testGame.guessMatchesSequence()).to.be.false; // jshint ignore:line
    });
  });
});

var createTestGame = function() {
  return new Game();
};
