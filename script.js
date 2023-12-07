// remake of the windows UI // 



$(document).ready(function () {
    const septemberFolder = $('.septemberFolder');
    const septemberfolderModal = $('#septemberfolderModal');
    const closeModal = $('.close');

    septemberFolder.on('dblclick', function () {
        septemberfolderModal.show();
    });

    closeModal.on('click', function () {
        septemberfolderModal.hide();
    });
});

$(document).ready(function () {
    const octoberFolder = $('.octoberFolder');
    const octoberfolderModal = $('#octoberfolderModal');
    const closeModal = $('.close');

    octoberFolder.on('dblclick', function () {
        octoberfolderModal.show();
    });

    closeModal.on('click', function () {
        octoberfolderModal.hide();
    });
});

$(document).ready(function () {
    const novemberFolder = $('.novemberFolder');
    const novemberfolderModal = $('#novemberfolderModal');
    const closeModal = $('.close');

    novemberFolder.on('dblclick', function () {
        novemberfolderModal.show();
    });

    closeModal.on('click', function () {
        novemberfolderModal.hide();
    });
});

$(document).ready(function () {
    const decemberFolder = $('.decemberFolder');
    const decemberfolderModal = $('#decemberfolderModal');
    const closeModal = $('.close');

    decemberFolder.on('dblclick', function () {
        decemberfolderModal.show();
    });

    closeModal.on('click', function () {
        decemberfolderModal.hide();
    });
});

$(document).ready(function () {
    const resourceFolder = $('.resourceFolder');
    const resourcefolderModal = $('#resourcefolderModal');
    const closeModal = $('.close');

    resourceFolder.on('dblclick', function () {
        resourcefolderModal.show();
    });

    closeModal.on('click', function () {
        resourcefolderModal.hide();
    });
});

$(document).ready(function () {
    const otherFolder = $('.otherFolder');
    const otherfolderModal = $('#otherfolderModal');
    const closeModal = $('.close');

    otherFolder.on('dblclick', function () {
        otherfolderModal.show();
    });

    closeModal.on('click', function () {
        otherfolderModal.hide();
    });
});



// make the folders draggable


$(function () {
    $(".imageContainer").draggable();
});


// make the modals draggable


$(function () {
    $(".modal").draggable();
});


// draggable rectangle FAIL

/*

$(document).ready(function () {
    let isDragging = false;
    let startX, startY;
    let rectangle;

    $(document).on('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;

        rectangle = $('<div class="resizable-rectangle"></div>');
        $('body').append(rectangle);

        $(document).on('mousemove', handleMouseMove);
        $(document).on('mouseup', handleMouseUp);
    });

    function handleMouseMove(e) {
        if (isDragging) {
            const width = e.clientX - startX;
            const height = e.clientY - startY;

            const left = width >= 0 ? startX : e.clientX;
            const top = height >= 0 ? startY : e.clientY;

            rectangle.css({
                left: left,
                top: top,
                width: Math.abs(width),
                height: Math.abs(height)
            });
        }
    }

    function handleMouseUp() {
        isDragging = false;
        $(document).off('mousemove', handleMouseMove);
        $(document).off('mouseup', handleMouseUp);

        // Remove the rectangle when the mouse is released
        rectangle.remove();
    }
});
*/



$(document).ready(function () {
    const images = [
        'background.jpg', //background images
        'background2.jpg'
    ];

    let currentIndex = 0;

    function changeBackground() {
        const nextIndex = (currentIndex + 1) % images.length;
        $('body').css('background-image', `url(${images[nextIndex]})`);
        currentIndex = nextIndex;
    }

    setInterval(changeBackground, 15000); // animates background every 10 seconds
});
