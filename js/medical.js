(function() {
    // 最新最热
    $('.title').children('div').click(function() {
        $(this).toggleClass('bdb').siblings().removeClass('bdb');
        if ($('.bot1').hasClass('bdb') == true) {
            $('.bot1-main').fadeIn(1500).css('display', 'block');
            $('.bot2-main').css('display', 'none');
        } else if ($('.bot2').hasClass('bdb') == true) {
            $('.bot2-main').fadeIn(1500).css('display', 'block');
            $('.bot1-main').css('display', 'none');
        }
    })

    // 点赞and评论
    var text = $('.zan-next').html();
    console.log(text);
    $('.zan').click(function() {
        $(this).toggleClass('zan1');
        if ($(this).hasClass('zan1')) {
            $(this).next().html(++text);
        } else {
            $(this).next().html(--text);
        }
    })

    // 弹层显示
    $('.mask').parent().mouseover(function(e) {
        $(this).children().stop().slideDown(1000);
    })
    $('.mask').parent().mouseout(function() {
        $(this).children().stop().slideUp(1000);
    })
})()