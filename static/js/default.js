/*
AI-------------------------------------------------------------------
  Default.js Map:

  Section 1: Functions to be called by other functions.
  Section 2: Functions executed right after the DOM becomes ready.
  Section 3: Event handler functions
-------------------------------------------------------------------AI
*/

/*
AI-------------------------------------------------------------------
  =========================Section 1================================
-------------------------------------------------------------------AI
*/

/*
AI-------------------------------------------------------------------
      On smaller devices, this function expands the navigation menu. 
      It also locks the viewport so the user can't scroll before 
      getting out of the menu.
-------------------------------------------------------------------AI
*/
function expandNavMenu() {
  $('#stock-nav').animate({
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: '100vh',
  }, function() {
    // lock scroll position, but retain settings for later
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    $('#sm-navbar-list').slideDown();
  });
}

/*
AI-------------------------------------------------------------------
  On small devices, this packs up the expanded navigation. 
  Then it undoes the scroll-lock that is activated by expandNavMenu 
  above.
-------------------------------------------------------------------AI
*/
function shrinkNavMenu() {
  $('#sm-navbar-list').slideUp();
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $('#stock-nav').animate({
      height: '60px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }, function() {
      var html = jQuery('html');
      var scrollPosition = html.data('scroll-position');
      html.css('overflow', html.data('previous-overflow'));
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    });
    $('#stock-nav').addClass('scrolled-nav');
  }
  else {
    $('#stock-nav').animate({
      height: '150px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }, function() {
      var html = jQuery('html');
      var scrollPosition = html.data('scroll-position');
      html.css('overflow', html.data('previous-overflow'));
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    });
  }
  
}

/*
AI-------------------------------------------------------------------
  =========================Section 2================================
-------------------------------------------------------------------AI
*/

/*
AI-------------------------------------------------------------------
  Once the page is done loading, this calls upon the functions that
  react to user interactions.
-------------------------------------------------------------------AI
*/
$(document).ready(function(){
  console.log('ready!');
  navBarHeightAdjuster();
  navBarExpandToggler();
});

console.log('end of the file');

/*
AI-------------------------------------------------------------------
  =========================Section 3================================
-------------------------------------------------------------------AI
*/

/*
AI-------------------------------------------------------------------
                    Event Handler Functions
-------------------------------------------------------------------AI
*/

/*
AI-------------------------------------------------------------------
  This function changes the NavBar height based on how far the user
  has scrolled.
-------------------------------------------------------------------AI
*/
function navBarHeightAdjuster() {
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $('#stock-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#stock-nav').removeClass('scrolled-nav');
      $('#stock-nav').css('height', '150px');
    } 
  });
}

/*
AI-------------------------------------------------------------------
  *SMALLER VIEWPORTS ONLY*
  This function calls upon the navigation expansion and shrink
  functions above once the hamburger icon is pressed.
-------------------------------------------------------------------AI
*/
function navBarExpandToggler() {
  var expanded = false;
  $('#hamburger').click( function() {
    if (expanded) {
      $('#hamburger').css('fill', 'white');
      shrinkNavMenu();
      expanded = false;
    }
    else {
      $('#hamburger').css('fill', 'black');
      if ($('#stock-nav').hasClass('scrolled-nav')) {
        expandNavMenu();
        $('#stock-nav').removeClass('scrolled-nav');
        expanded = true;
      }
      else {
        expandNavMenu();
        expanded = true;
      }
    }
  });
}
