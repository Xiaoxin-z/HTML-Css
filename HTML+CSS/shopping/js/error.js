window.addEventListener('load', function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regqq = /^[1-9]\d{4,}$/;
    var regnc = /^[\u4e00-\u9fa5]{0,}$/;
    var regmsg = /^\d{6}$/;
    var regpsw = /^[A-Za-z0-9_-]{6,16}$/
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var psw = document.querySelector('#psw');
    var psw_ = document.querySelector('#psw_');
    regexp(tel, regtel); //手机号
    regexp(qq, regqq); //QQ号
    regexp(nc, regnc); //昵称
    regexp(msg, regmsg); //验证密码
    regexp(psw, regpsw); //密码
    //表单验证的函数
    function regexp(ele, reg) {
        ele.addEventListener('blur', function() {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请从新输入';
            }
        })
    }
    psw_.addEventListener('blur', function() {
        if (this.value === psw.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>俩次输入不一样';
        }
    })
})