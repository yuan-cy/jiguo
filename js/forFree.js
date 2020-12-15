$(function() {
    (function() {
        $.ajax({
            url: 'http://192.168.1.94:3000/guid/new',
            type: 'get',
            dataType: "json",
            success: function(data) {
                var innerT = doT.template($('#list3').text());
                $('#list2').html(innerT(data));
            }
        });

        $.ajax({
            url: 'http://192.168.1.94:3000/guid/hot',
            type: 'get',
            dataType: "json",
            success: function(data) {
                var innerT = doT.template($('#list4').text());
                $('#list5').html(innerT(data));
            }
        });
    })();



})