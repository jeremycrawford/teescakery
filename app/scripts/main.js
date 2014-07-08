console.log('\'Allo \'Allo!');

$("#home-button").click(function() {
    $('body').animate({
        scrollTop: $("#main").offset().top
    }, 1250);
});

$("#work-button").click(function() {
    $('body').animate({
        scrollTop: $("#work-header").offset().top
    }, 1250);
});

$("#about-button").click(function() {
    $('body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#contact-button").click(function() {
    $('body').animate({
        scrollTop: $("#footer").offset().top
    }, 750);
});

$("#nav-arrow").click(function() {
    $('body').animate({
        scrollTop: $("#work-header").offset().top
    }, 1250);
});

// galleries 

$( ".birthday-button" ).click(function() {
  $( ".birthday-gallery-container" ).slideToggle( "slow" );
});

$( ".anniversary-button" ).click(function() {
  $( ".anniversary-gallery-container" ).slideToggle( "slow" );
});

$( ".baby-button" ).click(function() {
  $( ".baby-gallery-container" ).slideToggle( "slow" );
});

// x-button

$( "#exit-birthday-container" ).click(function() {
  $( ".birthday-gallery-container" ).slideToggle( "slow" );
});

$( "#exit-anniversary-container" ).click(function() {
  $( ".anniversary-gallery-container" ).slideToggle( "slow" );
});

$( "#exit-baby-container" ).click(function() {
  $( ".baby-gallery-container" ).slideToggle( "slow" );
});

// button-scroll-to

$(".birthday-button").click(function() {
    $('body').animate({
        scrollTop: $(".birthday-gallery-container").offset().top -75
    }, 750);
});

$(".anniversary-button").click(function() {
    $('body').animate({
        scrollTop: $(".anniversary-gallery-container").offset().top -75
    }, 750);
});

$(".baby-button").click(function() {
    $('body').animate({
        scrollTop: $(".baby-gallery-container").offset().top -75
    }, 750);
});

$("#exit-birthday-container").click(function() {
    $('body').animate({
        scrollTop: $("#work-header").offset().top +125
    }, 750);
});

$("#exit-anniversary-container").click(function() {
    $('body').animate({
        scrollTop: $("#work-header").offset().top +125
    }, 750);
});

$("#exit-baby-container").click(function() {
    $('body').animate({
        scrollTop: $("#work-header").offset().top +125
    }, 750);
});
