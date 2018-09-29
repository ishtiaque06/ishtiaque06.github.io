/*
AI-------------------------------------------------------------------
  Default.js Map:
  
  Section 0: Variables for caching selectors.
  Section 1: Functions to be called by other functions.
  Section 2: Functions executed right after the DOM becomes ready.
  Section 3: Event handler functions
-------------------------------------------------------------------AI
*/

/*
AI-------------------------------------------------------------------
  =========================Section 0================================
-------------------------------------------------------------------AI
*/

// This selects the NavBar to shrink it.
var stock_nav = $('#stock-nav');

// This selects the list of links that comes up when the NavBar 
// hamburger is pressed on mobile devices
var sm_navbar_list = $('#sm-navbar-list');

// This selects the window jquery object.
var $window = $(window);



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
  stock_nav.animate({
    backgroundColor: 'rgba(31, 126, 146, 0.9)',
    height: '100vh',
  }, function() {
    // lock scroll position, but retain settings for later
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var html = $('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    sm_navbar_list.slideDown();
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
  sm_navbar_list.slideUp();
  var scrollTop = $window.scrollTop();
  if (scrollTop >= 100) {
    stock_nav.animate({
      height: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }, function() {
      var html = $('html');
      var scrollPosition = html.data('scroll-position');
      html.css('overflow', html.data('previous-overflow'));
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    });
    stock_nav.addClass('scrolled-nav');
  }
  else {
    stock_nav.animate({
      height: '4rem',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }, function() {
      var html = $('html');
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
  $window.scroll(function(){
    scrollTop = $window.scrollTop();
    if (scrollTop >= 100) {
      stock_nav.addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      stock_nav.removeClass('scrolled-nav');
      stock_nav.css('height', '4rem');
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
      shrinkNavMenu();
      expanded = false;
    }
    else {
      if (stock_nav.hasClass('scrolled-nav')) {
        expandNavMenu();
        stock_nav.removeClass('scrolled-nav');
        expanded = true;
      }
      else {
        expandNavMenu();
        expanded = true;
      }
    }
  });
}
