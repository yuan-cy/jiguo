$(function() {
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
                an()
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
            // 渲染更多
        function an() {
            $.ajax({
                url: 'http://192.168.1.94:3000/play/new',
                type: 'get',
                dataType: "json",
                success: function(data) {

                    var innerT = doT.template($('#list_lt3').text());
                    var int = $('#list-l2').html()
                    $('#list-l2').html(int + innerT(data[parseInt(Math.random() * 4)]));
                }
            });
        }
        // 导航字体颜色
        /*  $('.ul_').children().click(function() {
             $(this).children().addClass('red').siblings().removeClass('red')
         }) */
        //计时器
        let timer = null;

        function auto() {
            let dtime = new Date();
            let xtime = new Date(2020, 11, 19, 16, 24);
            let w = xtime.getTime() - dtime.getTime();
            if (w >= 0) {
                let d = parseInt(w / 1000 / 60 / 60 / 24);
                d = d < 10 ? '0' + d : d
                let h = parseInt(w / 1000 / 60 / 60 % 60);
                h = h < 10 ? '0' + h : h
                let s = parseInt(w / 1000 / 60 % 60);
                s = s < 10 ? '0' + s : s
                let m = parseInt(w / 1000 % 60);
                m = m < 10 ? '0' + m : m
                span.innerHTML = d + '天' + h + '小时' + s + '分钟' + m + '秒';
            } else {
                clearInterval(timer);
            }
        };
        timer = setInterval(auto, 1000);
    })();
    //隐藏动画
    var num_ =0;
    $('.jg').click(function(){
        num_++;
        console.log(num_);
        if(num_==6){
            $('.h_').slideDown();
        }
        // if(num_ ==7){
        //     num_ =0;
        // }

    });
   
        $('.clear').click(function(){
            console.log(1111)
            $(this).parent('.h_').slideUp();
        });
    
})