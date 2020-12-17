$(function(){
    (function(){
        var tel =/^1[3-9]\d{9}$/;
        var pwd =/^\w{6,20}$/;  
        var flag = false;
    $('.tel').blur(function(){
        if(tel.test($(this).val())){
            $(this).next().css('color','green').text('验证通过');
            flag = true;
        }else{
            $(this).next().css('color','red').text('请输入正确的手机号');
        }
        return flag;
    });
    $('.yzm').blur(function(){
        var yzm = 'r2b7'
        // console.log(11111)
        if($(this).val()!= yzm ){
            $(this).parent().next().css('color','red').text('请输入验证码');
        }else{
            $(this).parent().next().css('color','green').text('验证通过');
            flag = true;
        }
        return true;
    });
    $('.user').blur(function(){
        if($(this).val()==''){
            $(this).next().css('color','red').text('请输入用户名');
        }else{
            $(this).next().css('color','green').text('验证通过');
            flag = true;
        }
        return flag;
    });
    $('.pwd').blur(function(){
        if(pwd.test($(this).val())){
            $(this).next().css('color','green').text('验证通过');
            flag = true;
        }else{
            $(this).next().css('color','red').text('请输入6-20位的密码');
        }
        return flag;
    });
    $('.pwds').blur(function(){
        if($(this).val()==''){
            $(this).next().css('color','red').text('密码不能为空');
        } else if($(this).val()!==$('.pwd').val()){
            $(this).next().css('color','red').text('两次密码不一样');
        }else{
            $(this).next().css('color','green').text('验证通过');
            flag = true;
        }
        return flag
     
    });
    $('.forms').on('submit',function () {
        // e.stopPropagation();
        
        var res1 = $('.tel').blur();
        var res2 = $('.yzm').blur();
        var res3 =  $('.user').blur();
        var res4 =  $('.pwd').blur();
        var res5 =  $('.pwds').blur();
        if( !res1 || !res2 || !res3 || !res4 || !res5){
            return false;
        }
            
        $.ajax({
            url:' http://192.168.1.24:3000/users/register',
            type:'post',
            data:{
                phone:$('.tel').val(),
                code:$('.yzm').val(),
                username: $('.user').val(),
                password: $('.pwds').val()
            },
            success:function(res){
                alert(res.msg);
                if(res.msg=='注册成功'){
                    // location = '/学习Web/练习/qy128/jiguo/index.html';
                    location = 'index.html';
                }
              
            }
        });

      
    });
   
    // 获取验证码
    var tiemr = null;
    var n = 60;
    $('.code').click(function(){
        // clearInterval(tiemr);  
        tiemr = setInterval(function(){
            if(n>1){
                $('.code').css('background','#ccc').html('('+--n+')'+'重新发送');
                $('.code').prop('disabled',true);
            }else{
                clearInterval(tiemr);
                n = 61;
                n--;
                $('.code').css('background','#fff').html('获取验证码');
                $('.code').prop('disabled',false);
            }
        },1000);
    });
    })();
});