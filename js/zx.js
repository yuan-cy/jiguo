$(function () {
    (function () {
     

        $.ajax({
            url: 'http://192.168.1.94:3000/play/hot',
            type: 'get',
            dataType: "json",
            success: function (data) {
              var innerT = doT.template($('#list1').text());
              $('#list').html(innerT(data[2]));
             
            }
          });
        $.ajax({
            url: 'http://192.168.1.94:3000/play/new',
            type: 'get',
            dataType: "json",
            success: function (data) {
              var innerT = doT.template($('#list3').text());
              $('#list2').html(innerT(data[0]));
               
            }
          });
   
       
    })();
});