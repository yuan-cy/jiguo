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