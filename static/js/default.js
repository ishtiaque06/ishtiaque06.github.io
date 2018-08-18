/*function navbarSizeToggler() {
  var scrollTop = 0;
  $(window).scroll
}*/

$(document).ready(function(){
  console.log('ready!');
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 100) {
      $('#stock-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#stock-nav').removeClass('scrolled-nav');
    } 
    
  }); 
  
});