(function() {

    // 定位

    $(document).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('aside').css({
                position: 'fixed',
            })
        }
    })




    // 跳转
    $('dl').eq(0).children('dd').click(function() {
        $('article').eq(0).removeClass('dp').next().addClass('dp');
    })
    $('dl').eq(1).children('dd').click(function() {
        $('article').eq(1).removeClass('dp').prev().addClass('dp');
    })
})()