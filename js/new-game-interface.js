var Game = require('./../js/simon.js').Game;

$(function() {
  $('#start-game').click(function() {
    var currentGame = new Game();
    updateAndDisplaySequence(currentGame);
  });

  function updateAndDisplaySequence(gameToUpdate) {
    gameToUpdate.updateSequence();
    var sequence = gameToUpdate.getSequence();
    for (var colorIndex in sequence) {
      var $clickedCell = $('div#' + sequence[colorIndex]);
      setTimeout(clickChosenCell, 800, $clickedCell);
    }
  }

  function clickChosenCell(target) {
    target.trigger('click');
  }
});
