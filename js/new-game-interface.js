var Game = require('./../js/simon.js').Game;
var TIMEPERFLASH = 800;

$(function() {
  var currentGame;

  $('#start-game').click(function() {
    currentGame = startNewGame();
  });

  function startNewGame(game) {
    var currentGame = new Game();
    $('.simon-cell').unbind('click');
    runOneTurn(currentGame);
    return currentGame;
  }

  function runOneTurn(game) {
    var turnCount = game.incrementTurnCount();
    updateAndDisplaySequence(game);
    setTimeout(userTurn, turnCount * TIMEPERFLASH, game);
  }

  function updateAndDisplaySequence(game) {
    game.updateSequence();
    var sequence = game.getSequence();
    var colorIndex = 0;
    setInterval(function() {
      var $chosenCell = $('div#' + sequence[colorIndex]);
      flashChosenCell($chosenCell);
      colorIndex++;
      if (colorIndex === sequence.length - 1) {
        return false;
      }
    }, TIMEPERFLASH);
  }

  function userTurn(game) {
    $('.simon-cell').click(function() {
      var $chosenCell = $(this);
      flashChosenCell($chosenCell);

      var cellID = this.id;
      game.updateUserGuesses(cellID);

      if (!game.guessMatchesSequence()) {
        newGameResponse = window.confirm('Game Over! You survived ' + (game.getTurnCount() - 1) +
          ' turns. Start a new game?');
        if (newGameResponse) {
          currentGame = startNewGame(game);
        }
      } else if (game.getUserGuesses().length === game.getTurnCount()) {
        $('.simon-cell').unbind('click');
        game.resetUserGuesses();
        runOneTurn(currentGame);
      }
    });
  }

  function flashChosenCell(target) {
    target.addClass('flash');

    var removeFlashClassFromClickedCell = (function () {
        $(this).removeClass('flash');
    }).bind(target);

    setTimeout(removeFlashClassFromClickedCell, 100);
  }
});
