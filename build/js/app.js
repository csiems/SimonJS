(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var COLORS = ['red', 'yellow', 'green', 'blue'];

function Game() {
  this.sequence = [];
  this.userGuesses = [];
}

Game.prototype.getSequence = function () {
  return this.sequence;
};

Game.prototype.updateSequence = function() {
  var newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  var sequence = this.getSequence();
  sequence.push(newColor);
};

Game.prototype.getUserGuesses = function () {
  return this.userGuesses;
};

Game.prototype.updateUserGuesses = function (guess) {
  var userGuesses = this.getUserGuesses();
  userGuesses.push(guess);
};

Game.prototype.guessMatchesSequence = function () {
  var sequence = this.getSequence();
  var userGuesses = this.getUserGuesses();
  var lastGuessIndex = userGuesses.length - 1;
  return userGuesses[lastGuessIndex] === sequence[lastGuessIndex];
};

exports.Game = Game;

},{}],2:[function(require,module,exports){
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

},{"./../js/simon.js":1}]},{},[2]);
