(function() {
    // 上卷下拉
    $(document).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#sh').slideDown(1000);
        } else {
            $('#sh').slideUp(1000);
        }

    })

    // 点击回顶部
    $('#sh').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 1000)


    })
})()
$(function() {
    (function() {

        $('#sh').click(function() {
            $('html,body').stop().animate({ scrollTop: 0 }, 300);
        });
        // 点击加载更多
        $('.load').click(function() {
            if ($(this).hasClass('load2')) {
                $('.load').removeClass('load2');
            } else {
                $('.load').addClass('load2').text('正在加载');
            }
            setTimeout(function() {
                $('.load').removeClass('load2').text('点击加载更多');
                $('.hide').slideDown();
            }, 2000);

        });
        // 切换
        $('.ul_l>li>a').each(function(index, ele) {
            $(ele).on('click', function() {
                console.log(11111111)
                $('.ul_l>li').removeClass('list');
                $('.ul_l>li').eq(index).addClass('list');
                $('.ul_l>li').parent('.ul_l').siblings('.content').hide();
                $('.ul_l>li').parent('.ul_l').siblings('.content').eq(index).show();
            });
        });
        $('.list').on('click', 'li>div>.spans', function() {
            var nn = $(this).html()
            if ($(this).hasClass('ss')) {
                $(this).removeClass('ss').html(++nn);
            } else {
                $(this).addClass('ss').html(--nn);
            }
        })


        // 导航字体颜色
        /*  $('.ul_').children().click(function() {
             $(this).children().addClass('red').siblings().removeClass('red')
         }) */


    })();
})