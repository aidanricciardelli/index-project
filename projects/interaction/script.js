$(document).ready(function () {
    var cursor = $('.cursor');

    $(window).mousemove(function (e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
});



