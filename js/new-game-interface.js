var Game = require('./../js/simon.js').Game;
var TIMEPERFLASH = 800;
var FLASH_DURATION = 100;

$(function() {
  var currentGame;

  $('#start-game').click(function() {
    currentGame = startNewGame();
  });

  function startNewGame(game) {
    var currentGame = new Game();
    runOneTurn(currentGame);
    return currentGame;
  }

  function runOneTurn(game) {
    var turnCount = game.incrementTurnCount();
    $('.simon-cell').unbind('click');
    updateAndDisplaySequence(game);
    delayPlayerTurnWhileComputerPlays(turnCount);
  }

  function updateAndDisplaySequence() {
    var sequence = currentGame.updateSequence();

    var colorIndex = 0;
    setInterval(function() {
      chooseAndFlashCell(sequence[colorIndex]);
      colorIndex++;
      if (colorIndex === sequence.length - 1) {
        return false;
      }
    }, TIMEPERFLASH);
  }

  function delayPlayerTurnWhileComputerPlays(turnCount) {
    setTimeout(userTurn, turnCount * TIMEPERFLASH, game);
  }

  function flashChosenCell(target) {
    target.addClass('flash');

    var removeFlashClassFromClickedCell = (function () {
        $(this).removeClass('flash');
    }).bind(target);

    setTimeout(removeFlashClassFromClickedCell, FLASH_DURATION);
  }

  function chooseAndFlashCell(target) {
    var $chosenCell = $('div#' + target);
    flashChosenCell($chosenCell);
  }

  function userTurn(game) {
    $('.simon-cell').click(onUserClick);
  }

  function onUserClick() {
    var $chosenCell = $(this);
    flashChosenCell($chosenCell);

    var cellID = this.id;
    game.updateUserGuesses(cellID);

    if (userGuessIsWrong()) {
      gameOver();
    } else if (turnCompleted()) {
      startNextTurn();
    }
  });

  function gameOver() {
    newGameResponse = window.confirm('Game Over! You survived ' + (game.getTurnCount() - 1) +
      ' turns. Start a new game?');
    if (newGameResponse) {
      setTimeout(startNewGame(), TIMEPERFLASH;
    }
  }

  function startNextTurn() {
   currentGame.resetUserGuesses();
   setTimeout(runOneTurn());
 }
});
