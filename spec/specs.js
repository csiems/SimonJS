describe("Game", function() {
  it("will instantiate with an empty sequence", function() {
    var testGame = new Game();
    expect(testGame.getSequence()).to.be.empty;
  })
});
