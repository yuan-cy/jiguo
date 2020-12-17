$(function () {
    (function () {
        // 时间倒计时
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
        // 轮播图
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
            autoplay: {
                delay: 1500, //1秒切换一次
                disableOnInteraction: false,

            },
            speed: 1000,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        //鼠标移入停止播放，鼠标离开  继续轮播
        $('.swiper-slide').mouseenter(function () {
            swiper.autoplay.stop();
        });
        $('.swiper-slide').mouseleave(function () {
            swiper.autoplay.start();
        });
        $('.list').on('click', 'li>div>.spans', function () {
            console.log(1111111)
            $(this).css('border', 'red');
        }, function () {
            $(this).css('border', '');
        })
        // 报告精选 
        $.ajax({
            url: 'http://192.168.1.24:3000/play/hot',
            type: 'get',
            dataType: "json",
            success: function (data) {
                var innerT = doT.template($('#list1').text());
                $('#list').html(innerT(data[2]));

            }

        });
        $('.list').on('click', 'li>div>.spans', function () {
            var nn = $(this).html()
            if ($(this).hasClass('ss')) {
                $(this).removeClass('ss').html(++nn);
            } else {
                $(this).addClass('ss').html(--nn);
            }



        })
        // 导购精选
        $.ajax({
            url: 'http://192.168.1.24:3000/play/new',
            type: 'get',
            dataType: "json",
            success: function (data) {
                var innerT = doT.template($('#list3').text());
                $('#list2').html(innerT(data[1]));
            }
        });
        // 发现酷玩
        $.ajax({
            url: 'http://192.168.1.24:3000/play/new',
            type: 'get',
            dataType: "json",
            success: function (data) {
                var innerT = doT.template($('#list_lt').text());
                $('#list-l').html(innerT(data[3]));
            }
        });
        // 隐藏部分
        $.ajax({
            url: 'http://192.168.1.24:3000/play/new',
            type: 'get',
            dataType: "json",
            success: function (data) {
                var innerT = doT.template($('#list_lt2').text());
                $('#list-l2').html(innerT(data[3]));
            }
        });
        // 点击加载更多
        $('.load').click(function () {
            if ($(this).hasClass('load2')) {
                $('.load').removeClass('load2');
            } else {
                $('.load').addClass('load2').text('正在加载');
            }
            setTimeout(function () {
                $('.load').removeClass('load2').text('点击加载更多');
                $('.hide').slideDown();
            }, 2000);

        });
        // 登录显示隐藏
        $('.bumit').on('click', function () {
            $('.for').slideDown();
        });
        $('.tui').on('click', function () {
            $(this).parents('.for').slideUp();
        });
        // 登录
        $('.for').on('submit', function () {
            $.ajax({
                url: ' http://192.168.1.24:3000/users/login',
                type: 'post',
                data: {
                    username: $('#poh').val(),
                    password: $('#pas').val()
                },
                success: function (res) {
                    alert(res.msg);
                    // if($('.chd:checked')){
                    //     localStorage.setItem($('#poh').val());
                    //     localStorage.setItem($('#pas').val());
                    //     localStorage.setItem($('.chd').prop('checked'));
                    // }else{
                    //     localStorage.clear()
                    // }
                    if (res.msg == '登录成功') {
                        $('.for').slideUp();
                    }
                    if ($('.chd').is(':checked')) {
                        localStorage.setItem('user', $('#poh').val());
                        localStorage.setItem('pass', $('#pas').val());
                        localStorage.setItem('ch', $('.chd').is(':checked'));
                    } else {
                        localStorage.clear();
                    }
                    if (localStorage.getItem('ch')) {
                        $('#poh').val(localStorage.getItem('user'));
                        $('#pas').val(localStorage.getItem('pass'));
                        $('.chd').attr('checked', localStorage.getItem('ch'))
                    }

                }
            });



        });
     
    })();

});