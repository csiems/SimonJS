$(function() {
  $('.simon-cell').click(function() {
    var $clickedCell = $(this);
    $clickedCell.addClass('flash');

    var removeFlashClassFromClickedCell = (function () {
        $(this).removeClass('flash');
    }).bind($clickedCell);

    setTimeout(removeFlashClassFromClickedCell, 100);
  });
});

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

      // var clickTheCell = (function () {
      //   $(this).trigger('click');
      // }).bind($clickedCell);

      setTimeout(clickChosenCell, 800, $clickedCell);
    }
  }

  function clickChosenCell(target) {
    target.trigger('click');
  }
})
