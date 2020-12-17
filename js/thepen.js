(function() {


    // 喜欢
    var num = $('.num').html();
    $('.left-img').click(function() {
        $(this).css('display', 'none')
        $(this).next('div').css('display', 'block')
        $('.num').html(++num);
    })
    $('.left-img1').click(function() {
        $(this).css('display', 'none')
        $(this).prev('div').css('display', 'block')
        $('.num').html(--num)
    })

    // 分享
    $('.right-img').click(function() {
        $(this).css('display', 'none')
        $(this).next('div').css('display', 'block')

    })
    $('.right-img1').click(function() {
        $(this).css('display', 'none')
        $(this).prev('div').css('display', 'block')

    })
})()