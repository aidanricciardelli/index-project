$(document).ready(function () {
    var cursor = $('.cursor');
    var square1 = $('.square1');
    var square2 = $('.square2');
    var square3 = $('.square3');
    var square4 = $('.square4');
    //abandoned code



    $(window).mousemove(function (e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2,
        });
    });

    $(window).mousemove(function (e) {
        square1.css({
            height: e.clientY - cursor.height() / 2,
            width: e.clientX - cursor.width() / 2,
            //makes lefteye follow cursor
        });
    });

    $(window).mousemove(function (e) {
        square2.css({
            height: 750 - e.clientY,
            //makes mouth and nose follow cursor
        });
    });

    $(window).mousemove(function (e) {
        square3.css({
            height: e.clientY - cursor.height() / 2,
            width: 1550 - e.clientX,
            //makes righteye follow cursor
        });
    });




});

var imageArray = ['mouthnose.jpg', 'mouthnose2.jpg', 'mouthnose3.jpg'];
var maxPhotos = imageArray.length;

//array for randomized images

$(window).click(function changeRandomPhoto() {

    var randomIndex = Math.floor(Math.random() * maxPhotos);
    var shapeElement = $('#mouthnose');
    shapeElement.attr('src', imageArray[randomIndex]);
    shapeElement.attr('alt', 'Random Photo');

}

)
//mouth and nose randomizer



var imageArray2 = ['lefteye.jpg', 'lefteye2.jpg', 'lefteye3.jpg'];
var maxPhotos2 = imageArray.length;

//array for randomized images

$(window).click(function changeRandomPhoto() {

    var randomIndex = Math.floor(Math.random() * maxPhotos2);
    var shapeElement = $('#lefteye');
    shapeElement.attr('src', imageArray2[randomIndex]);
    shapeElement.attr('alt', 'Random Photo');

}

)
// left eye randomizer



var imageArray3 = ['righteye.jpg', 'righteye2.jpg', 'righteye3.jpg'];
var maxPhotos3 = imageArray.length;

//array for randomized images

$(window).click(function changeRandomPhoto() {

    var randomIndex = Math.floor(Math.random() * maxPhotos3);
    var shapeElement = $('#righteye');
    shapeElement.attr('src', imageArray3[randomIndex]);
    shapeElement.attr('alt', 'Random Photo');

}

)
// right eye randomizer














