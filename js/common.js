$(".footer-colors").children('div').children('img').click(function(){

    let value = $(this).attr('src');
    let i = value[10];
    let j = value[11];
    if(j == '.') {
        $(".footer-item-2").children('div').eq(0).css("background-image", "url('img/footer-sl-"+ i +".png')");
    } else {
        i = i.concat(j);
        $(".footer-item-2").children('div').eq(0).css("background-image", "url('img/footer-sl-"+ i +".png')");
    }

});

$('.formsArrow1').click(function() {

    let name = [
        "Большие конструкции",
        "Фрамуги",
    ];

    let value = $('.formsSlaider').eq(0).attr('value');
    value--;

    $('.formsSlaider').children('div').eq(0).css("background-image", "url('img/constructions/forms-"+value+".png')");
    $('.formsSlaider').children('div').eq(1).text(name[value-1]);
    $('.formsSlaider').eq(0).attr("value", value);

    if(value == 1) {
        $('.formsArrow1').addClass('hidden', 'hidden');
    }
    if(value != 2) {
        $('.formsArrow2').removeClass('hidden');
    }

});

$('.formsArrow2').click(function() {

    let name = [
        "Большие конструкции",
        "Фрамуги",
    ];

    let value = $('.formsSlaider').eq(0).attr('value');
    value++;

    $('.formsSlaider').children('div').eq(0).css("background-image", "url('img/constructions/forms-"+value+".png')");
    $('.formsSlaider').children('div').eq(1).text(name[value-1]);
    $('.formsSlaider').eq(0).attr("value", value);

    if(value == 2) {
        $('.formsArrow2').addClass('hidden', 'hidden');
    }
    if(value != 1) {
        $('.formsArrow1').removeClass('hidden');
    }

});


$('.constArrow2').click(function() {

    let name = [
        "Двери",
        "Портальные системы",
    ];

    let value = $('.consSlaider').eq(0).attr('value');
    value++;

    $('.consSlaider').children('div').eq(0).css("background-image", "url('img/constructions/constructions-"+value+".png')");
    $('.consSlaider').children('div').eq(1).text(name[value-1]);
    $('.consSlaider').eq(0).attr("value", value);

    if(value == 2) {
        $('.constArrow2').addClass('hidden', 'hidden');
    }
    if(value != 1) {
        $('.constArrow1').removeClass('hidden');
    }

});


$('.constArrow1').click(function() {

    let name = [
        "Двери",
        "Портальные системы",
    ];

    let value = $('.consSlaider').eq(0).attr('value');
    value--;

    $('.consSlaider').children('div').eq(0).css("background-image", "url('img/constructions/constructions-"+value+".png')");
    $('.consSlaider').children('div').eq(1).text(name[value-1]);
    $('.consSlaider').eq(0).attr("value", value);

    if(value == 1) {
        $('.constArrow1').addClass('hidden', 'hidden');
    }
    if(value != 2) {
        $('.constArrow2').removeClass('hidden');
    }

});

$('.colorsArrow2').click(function() {

    let value = $('.in-min-colors-item-5').attr('value');
    value++;

    $('.in-min-colors-item-5').attr("src", "img/color"+value+".png");
    $('.in-min-colors-item-5').attr("value", value);

    if(value == 5) {
        $('.colorsArrow2').addClass('hidden', 'hidden');
    }
    if(value != 1) {
        $('.colorsArrow1').removeClass('hidden');
    }

});

$('.colorsArrow1').click(function() {

    let value = $('.in-min-colors-item-5').attr('value');
    value--;

    $('.in-min-colors-item-5').attr("src", "img/color"+value+".png");
    $('.in-min-colors-item-5').attr("value", value);

    if(value == 1) {
        $('.colorsArrow1').addClass('hidden', 'hidden');
    }
    if(value != 5) {
        $('.colorsArrow2').removeClass('hidden');
    }

});

$('.type-glazing__wrapper').slick({
    slideToShow: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true
});