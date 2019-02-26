/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(window).on('load', (function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
}))

var isAnch = false;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
  horizontal();
  function goToByScroll(id){
    // Reove "link" from the ID
    // Scroll
    var pos = $(id).offset().left;
    console.log(pos);
    isAnch = true;
   // $(window).scrollTop(pos - 300); 
    // var container = document.getElementsByClassName('container')[0];
    //$(window).scrollTop(1);
    // window.pageYOffset
    $('body, html').animate({scrollTop: (pos -300)}, 800);

  }
  
  $("#pane_nav > a").click((function(e) { 
    // Prevent a page reload when a link is pressed
  e.preventDefault(); 
  console.log('ckc')
    // Call the scroll function
    var pos = $("#erpcrm").offset().left;
    
    //$(window).scrollTop(pos - 300);      
    goToByScroll($(this).attr("href"));    
  }));
}

function horizontal() {
  var page = document.getElementById('page');
  var container = document.getElementsByClassName('container')[0];
  var pagefirstCopy = page.firstElementChild.cloneNode(true);
  page.append(pagefirstCopy);
  var last_pane = page.getElementsByClassName('pane');
  last_pane = last_pane[last_pane.length-1];
  var dummy_x = null;

window.onscroll = function () {
  console.log(window.pageYOffset);
  // Horizontal Scroll.
  var y = container.getBoundingClientRect().top;
  page.scrollLeft = -y;
  
  // Looping Scroll.
  var diff = window.pageYOffset - dummy_x;
  if (diff > 0) {
    window.scrollTo(0, diff);
    console.log(diff);
  }
  else if (isAnch == true) {
    //window.scrollTo(0, 0);
    //window.pageYOffset = 1;
    console.log(isAnch);
    isAnch = false;
  }
  else if (window.pageYOffset == 0) 
  {
    window.scrollTo(0, dummy_x+ 10);
    console.log('reset', dummy_x);
  }
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  console.log('Reset',last_pane.getBoundingClientRect());
  dummy_x = last_pane.getBoundingClientRect().left+window.pageYOffset;
}

}
 

var btnBurger = document.getElementById('nav-toggle');
var sideNav = document.getElementsByTagName('nav')[0];

btnBurger.onclick = function() {
  
  sideNav.classList.toggle("open");
}


$(".single-item").slick({
});




			