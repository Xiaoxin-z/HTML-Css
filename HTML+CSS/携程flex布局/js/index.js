window.addEventListener('load', function() {
    var banner = document.querySelector('.banner');
    var ul = banner.querySelector('ul');
    var w = banner.offsetWidth;
    var ol = banner.querySelector('ol');
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transform = 'translateX(' + translatex + 'px)';
        ul.style.transition = 'all.3s';
    }, 2000);
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {}

        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });
    var startX = 0;
    var moveX = 0;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    });

    var goback = document.querySelector('.goback');
    var nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
    })
    goback.addEventListener('click', function() {
        window.scroll(0, 0);
    })

})