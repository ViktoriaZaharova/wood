$('.black-menu').hide();

$('.top-menu-btn').click(function() {

    $('.black-menu').fadeIn(700);
    $('*').css("overflow", "hidden");

});

$('.x').click(function() {

    $('.black-menu').fadeOut(700);
    $('*').css("overflow", "auto");

});
