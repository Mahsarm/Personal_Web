
// navbar color

     
$(document).scroll(function() {
    var digit = $('.home').height()-30;
    if( $(this).scrollTop() >= digit ) {
        $('header').css({"opacity":1, "background-color":"#4682b4"});
        $('a').css('color', 'white' );
        
    } else{
        
        $('header').css({"background-color":"rgba(255,255,255,0.4)" });
        $('a').css('color', 'black' )
}})