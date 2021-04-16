/*
 * SMOOTH SCROLL
 */

$("a").on('click', function(event) {
  if( $(this).attr('href') == '#' ) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800, function(){
      window.location.hash = hash;
    });
  } else if (this.hash !== "") {
    var hash = this.hash;
    if( $(hash).length ) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  }
});
