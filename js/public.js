$(function () {
  (function () {

    $('#sh').click(function () {
      $('html,body').stop().animate({ scrollTop: 0 }, 300);
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
        an();
      }, 2000);

    });
    // 切换
    $('.ul_l>li>a').each(function (index, ele) {
      $(ele).on('click', function () {
        $('.ul_l>li').removeClass('list');
        $('.ul_l>li').eq(index).addClass('list');
        $('.ul_l>li').parent('.ul_l').siblings('.content').hide();
        $('.ul_l>li').parent('.ul_l').siblings('.content').eq(index).show();
      });
    });
    $('.list').on('click', 'li>div>.spans', function () {
      var nn = $(this).html()
      console.log(nn)
      if ($(this).hasClass('ss')) {
        $(this).removeClass('ss').html(++nn);
      } else {
        $(this).addClass('ss').html(--nn);
      }
    });
    // 渲染更多
    function an() {
      $.ajax({
        url: 'http://192.168.1.94:3000/play/new',
        type: 'get',
        dataType: "json",
        success: function (data) {

          var innerT = doT.template($('#list_lt3').text());
          var int = $('#list-l2').html()
          $('#list-l2').html(int + innerT(data[parseInt(Math.random() * 4)]));
        }
      });
    }
  })();
})