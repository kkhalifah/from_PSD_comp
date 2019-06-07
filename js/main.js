$(document).ready(() => {
    // wowjs.uk/docs.html for styling options
     new WOW().init();
    
    //hamburger menu
$('.burger-nav').on("click", function(){
    $('.container nav ul').toggleClass('open');
});    
    
 $('.js-wp-2').waypoint(direction => {
 $('.js-wp-2').addClass('animated slideInUp');
 }, {
 offset: '30%'
 });
    
 $('.js-wp-3').waypoint(direction => {
 $('.js-wp-3').addClass('animated fadeIn');
 }, {
 offset: '70%'
 });
    
    $('.phone-btn').delay(1000).animate({bottom: '+=-3'}, 200);
    $('.phone-btn').delay(300).animate({top: '+=-3'}, 300);
    
    
  
    
    
    
});