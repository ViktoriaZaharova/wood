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