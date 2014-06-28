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

// $(function () {
// $("#work-button").click(function (e) {
// e.preventDefault();
// $("#work-button").addClass("active").not(this).removeClass("active");
// });
// });