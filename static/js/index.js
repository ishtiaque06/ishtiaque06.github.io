// Caching selectors for animation
var $slide_right = $('.slide-right');
var $slide_left = $('.slide-left');
var $window = $(window);
var $document = $(document);


$document.ready(function() {
  $window.trigger('scroll');
  $slide_right.addClass('in-view');
  $slide_left.addClass('in-view');
});