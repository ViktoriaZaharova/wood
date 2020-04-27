$('.slaiderArrow2').click(function() {

    let name = [
        "Rehau Blitz New",
        "Rehau Thermo Design",
        "Rehau Grazio",
        "Rehau Delight",
    ];
    let desc = [
        "бюджетное решение для квартир, расположенных рядом с оживленными дорогами",
        "создают надежную преграду для холода, эффективно удерживают тепло, гасят шум",
        "защитят ваш дом от сквозняков и холода, будут надежным заслоном от шума",
        "идеальный выбор для панорамных окон",
    ];

    let value = $('.slaiderItem').eq(0).attr('value');
    value++;

    $('.slaiderItem').children('div').eq(0).css("background-image", "url('../img/window/"+value+".png')");
    $('.slaiderItem').children('div').eq(1).text(name[value]);
    $('.slaiderItem').children('div').eq(2).text(desc[value]);
    $('.slaiderItem').eq(0).attr("value", value);

    if(value == 0) {
        $('.slaiderArrow1').addClass('hidden');
    } else {
        $('.slaiderArrow1').removeClass('hidden');
    }
    if(value != 3) {
        $('.slaiderArrow2').removeClass('hidden');
    }  else {
        $('.slaiderArrow2').addClass('hidden');
        $('.slaiderArrow1').removeClass('hidden');
    }

});

$('.slaiderArrow1').click(function() {

    let name = [
        "Rehau Blitz New",
        "Rehau Thermo Design",
        "Rehau Grazio",
        "Rehau Delight",
    ];
    let desc = [
        "бюджетное решение для квартир, расположенных рядом с оживленными дорогами",
        "создают надежную преграду для холода, эффективно удерживают тепло, гасят шум",
        "защитят ваш дом от сквозняков и холода, будут надежным заслоном от шума",
        "идеальный выбор для панорамных окон",
    ];

    let value = $('.slaiderItem').eq(0).attr('value');
    value--;

    $('.slaiderItem').children('div').eq(0).css("background-image", "url('../img/window/"+value+".png')");
    $('.slaiderItem').children('div').eq(1).text(name[value]);
    $('.slaiderItem').children('div').eq(2).text(desc[value]);
    $('.slaiderItem').eq(0).attr("value", value);

    if(value == 0) {
        $('.slaiderArrow1').addClass('hidden');
    } else {
        $('.slaiderArrow1').removeClass('hidden');
    }
    if(value != 3) {
        $('.slaiderArrow2').removeClass('hidden');
    }  else {
        $('.slaiderArrow2').addClass('hidden');
        $('.slaiderArrow1').removeClass('hidden');
    }

});

$('.rotoArrows2').click(function() {

    let name = [
        "Виды фурнитуры",
        "Многоприжимные механизмы",
        "Системы блокировки",
    ];
    let desc = [
        "откидная, поворотная и поворотно-откидная",
        "позволяют раме оставаться герметичнойна протяжении многих лет",
        "защищают от взлома",
    ];

    let value = $('.rotoSlaider').eq(0).attr('value');
    value++;

    $('.rotoSlaider').children('img').attr("src", "../img/window/roto_"+value+".png");
    $('.rotoSlaider').children('div').eq(0).text(name[value-1]);
    $('.rotoSlaider').children('div').eq(1).text(desc[value-1]);
    $('.rotoSlaider').eq(0).attr("value", value);

    if(value == 1) {
        $('.rotoArrows1').addClass('hidden');
    } else {
        $('.rotoArrows1').removeClass('hidden');
    }
    if(value != 3) {
        $('.rotoArrows2').removeClass('hidden');
    }  else {
        $('.rotoArrows2').addClass('hidden');
        $('.rotoArrows1').removeClass('hidden');
    }


});

$('.rotoArrows1').click(function() {

    let name = [
        "Виды фурнитуры",
        "Многоприжимные механизмы",
        "Системы блокировки",
    ];
    let desc = [
        "откидная, поворотная и поворотно-откидная",
        "позволяют раме оставаться герметичнойна протяжении многих лет",
        "защищают от взлома",
    ];

    let value = $('.rotoSlaider').eq(0).attr('value');
    value--;

    $('.rotoSlaider').children('img').attr("src", "../img/window/roto_"+value+".png");
    $('.rotoSlaider').children('div').eq(0).text(name[value-1]);
    $('.rotoSlaider').children('div').eq(1).text(desc[value-1]);
    $('.rotoSlaider').eq(0).attr("value", value);


    if(value == 1) {
        $('.rotoArrows1').addClass('hidden');
    } else {
        $('.rotoArrows1').removeClass('hidden');
    }
    if(value != 3) {
        $('.rotoArrows2').removeClass('hidden');
    }  else {
        $('.rotoArrows2').addClass('hidden');
        $('.rotoArrows1').removeClass('hidden');
    }

});

$('.formsArrow2').click(function() {

    let name = [
        "Арочное",
        "Трапециевидное",
        "Круглое",
        "Фрамуги",
        "Портальные системы",
        "Портальные системы",
    ];

    let value = $('.formsSlaider').eq(0).attr('value');
    value++;

    $('.formsSlaider').children('div').eq(0).css("background-image", "url('../img/window/forms-"+value+".png')");
    $('.formsSlaider').children('div').eq(1).text(name[value-1]);
    $('.formsSlaider').eq(0).attr("value", value);

    if(value == 6) {
        $('.formsArrow2').addClass('hidden', 'hidden');
    }
    if(value != 1) {
        $('.formsArrow1').removeClass('hidden');
    }

});

$('.formsArrow1').click(function() {

    let name = [
        "Арочное",
        "Трапециевидное",
        "Круглое",
        "Фрамуги",
        "Портальные системы",
        "Портальные системы",
    ];

    let value = $('.formsSlaider').eq(0).attr('value');
    value--;

    $('.formsSlaider').children('div').eq(0).css("background-image", "url('../img/window/forms-"+value+".png')");
    $('.formsSlaider').children('div').eq(1).text(name[value-1]);
    $('.formsSlaider').eq(0).attr("value", value);

    if(value == 1) {
        $('.formsArrow1').addClass('hidden', 'hidden');
    }
    if(value != 6) {
        $('.formsArrow2').removeClass('hidden');
    }

});


$('.colorsArrow2').click(function() {

    let value = $('.in-min-colors-item-5').attr('value');
    value++;

    $('.in-min-colors-item-5').attr("src", "img/window/color-window-1-"+value+".png");
    $('.in-min-colors-item-5').attr("value", value);

    if(value == 6) {
        $('.colorsArrow2').addClass('hidden', 'hidden');
    }
    if(value != 1) {
        $('.colorsArrow1').removeClass('hidden');
    }

});

$('.colorsArrow1').click(function() {

    let value = $('.in-min-colors-item-5').attr('value');
    value--;

    $('.in-min-colors-item-5').attr("src", "img/window/color-window-1-"+value+".png");
    $('.in-min-colors-item-5').attr("value", value);

    if(value == 1) {
        $('.colorsArrow1').addClass('hidden', 'hidden');
    }
    if(value != 6) {
        $('.colorsArrow2').removeClass('hidden');
    }

});

$('.cArrow1').click(function() {

    let value = $('.in-min-colors-item-9').attr('value');
    value++;

    $('.in-min-colors-item-9').attr("src", "img/window/color-window-2-"+value+".png");
    $('.in-min-colors-item-9').attr("value", value);

    if(value == 6) {
        $('.cArrow1').addClass('hidden', 'hidden');
    }
    if(value != 1) {
        $('.cArrow2').removeClass('hidden');
    }

});

$('.cArrow2').click(function() {

    let value = $('.in-min-colors-item-9').attr('value');
    value--;

    $('.in-min-colors-item-9').attr("src", "img/window/color-window-2-"+value+".png");
    $('.in-min-colors-item-9').attr("value", value);

    if(value == 1) {
        $('.cArrow2').addClass('hidden', 'hidden');
    }
    if(value != 6) {
        $('.cArrow1').removeClass('hidden');
    }

});

$('.footerArrow2').click(function() {

    let value1 = $('.footerSlaider1').attr('value');
    let value2 = $('.footerSlaider2').attr('value');
    let name = [
        "Темный дуб",
        "Натуральный дуб",
        "Золотой дуб",
        "Махагон",
        "Орех",
        "Серый антрацит",
    ];

    value1++;
    value2++;

    $('.footerSlaider1').attr("src", "img/color-"+value1+".png");
    $('.footerSlaider2').attr("src", "img/color-"+value2+".png");
    $('.desc-footerSlaider1').text(name[value1-1]);
    $('.desc-footerSlaider2').text(name[value2-1]);
    $('.footerSlaider1').attr("value", value1);
    $('.footerSlaider2').attr("value", value2);

    if(value2 == 6) {
        $('.footerArrow2').addClass('hidden', 'hidden');
    }
    if(value1 != 1) {
        $('.footerArrow1').removeClass('hidden');
    } else {
        $('.footerArrow1').addClass('hidden', 'hidden');
    }


});

$('.footerArrow1').click(function() {

    let value1 = $('.footerSlaider1').attr('value');
    let value2 = $('.footerSlaider2').attr('value');
    let name = [
        "Темный дуб",
        "Натуральный дуб",
        "Золотой дуб",
        "Махагон",
        "Орех",
        "Серый антрацит",
    ];

    value1--;
    value2--;

    $('.footerSlaider1').attr("src", "img/color-"+value1+".png");
    $('.footerSlaider2').attr("src", "img/color-"+value2+".png");
    $('.desc-footerSlaider1').text(name[value1-1]);
    $('.desc-footerSlaider2').text(name[value2-1]);
    $('.footerSlaider1').attr("value", value1);
    $('.footerSlaider2').attr("value", value2);

    if(value2 == 6) {
        $('.footerArrow1').addClass('hidden', 'hidden');
    }
    if(value1 != 1) {
        $('.footerArrow2').removeClass('hidden');
    } else {
        $('.footerArrow1').addClass('hidden', 'hidden');
    }

});

$('.footerArrow22').click(function() {

    let value1 = $('.footerSlaider11').attr('value');
    let value2 = $('.footerSlaider22').attr('value');
    let name = [
        "RAL 1016",
        "RAL 6002",
        "RAL 2004",
        "RAL 5012",
        "RAL 5013",
        "RAL 7040",
    ];

    value1++;
    value2++;

    $('.footerSlaider11').attr("src", "img/color-"+value1+".png");
    $('.footerSlaider22').attr("src", "img/color-"+value2+".png");
    $('.desc-footerSlaider11').text(name[value1-7]);
    $('.desc-footerSlaider22').text(name[value2-7]);
    $('.footerSlaider11').attr("value", value1);
    $('.footerSlaider22').attr("value", value2);

    if(value2 == 12) {
        $('.footerArrow22').addClass('hidden', 'hidden');
    }
    if(value1 != 7) {
        $('.footerArrow11').removeClass('hidden');
    } else {
        $('.footerArrow11').addClass('hidden', 'hidden');
    }

});

$('.footerArrow11').click(function() {

    let value1 = $('.footerSlaider11').attr('value');
    let value2 = $('.footerSlaider22').attr('value');
    let name = [
        "RAL 1016",
        "RAL 6002",
        "RAL 2004",
        "RAL 5012",
        "RAL 5013",
        "RAL 7040",
    ];

    value1--;
    value2--;

    $('.footerSlaider11').attr("src", "img/color-"+value1+".png");
    $('.footerSlaider22').attr("src", "img/color-"+value2+".png");
    $('.desc-footerSlaider11').text(name[value1-7]);
    $('.desc-footerSlaider22').text(name[value2-7]);
    $('.footerSlaider11').attr("value", value1);
    $('.footerSlaider22').attr("value", value2);

    if(value2 == 12) {
        $('.footerArrow22').addClass('hidden', 'hidden');
    }
    if(value1 != 7) {
        $('.footerArrow11').removeClass('hidden');
    } else {
        $('.footerArrow11').addClass('hidden', 'hidden');
    }

});

$(".footer-colors").children('div').children('img').click(function(){

    let value = $(this).attr('src');
    let i = value[10];
    let j = value[11];
    if(j == '.') {
        $(".footer-item-2").children('div').eq(0).css("background-image", "url('../img/footer-sl-"+ i +".png')");
    } else {
        i = i.concat(j);
        $(".footer-item-2").children('div').eq(0).css("background-image", "url('../img/footer-sl-"+ i +".png')");
    }


});

$(".footerSlaider1, .footerSlaider2, .footerSlaider11, .footerSlaider22").click(function(){

    let value = $(this).attr('src');
    let i = value[10];
    let j = value[11];

    if(j == '.') {
        $(".footer-item-2").children('div').eq(0).css("background-image", "url('../img/footer-sl-"+ i +".png')");

    } else {
        i = i.concat(j);
        $(".footer-item-2").children('div').eq(0).css("background-image", "url('../img/footer-sl-"+ i +".png')");

    }

});
