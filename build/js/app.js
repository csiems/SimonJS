(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Game = require('./../js/simon.js').Game;
var TIMEPERFLASH = 800;

$(function() {
  var currentGame;

  $('#start-game').click(function() {
    currentGame = startNewGame();
  });

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

  function flashChosenCell(target) {
    target.addClass('flash');

    var removeFlashClassFromClickedCell = (function () {
        $(this).removeClass('flash');
    }).bind(target);

    setTimeout(removeFlashClassFromClickedCell, 100);
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

  function startNewGame(game) {
    var currentGame = new Game();
    $('.simon-cell').unbind('click');
    runOneTurn(currentGame);
    return currentGame;
  }
});

},{"./../js/simon.js":1}]},{},[2]);
