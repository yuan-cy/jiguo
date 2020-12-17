$(function () {
    (function () {
        // 计时器
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
})