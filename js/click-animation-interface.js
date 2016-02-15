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
