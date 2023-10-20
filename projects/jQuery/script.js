
//intructions of page
console.log("interact with lines by hovering over left side of screen, click anywhere to invert colors");





//creates vertical lines across left hand side of screen
for (let step = 0; step < 450; step++) {
    let blocks = '<div class="block" style="width: 100px; height: 0.2px; border:1px solid black;">';
    $("body").append(blocks);
}






/*
$(".block").each(function () {
    $(this).on("mouseenter", function () {
        $(this).height(50).css


    })


})

/*

/*$(".block").each(function () {
    $(this).on("mouseleave", function () {
        $(this).height(10).css


    })


}*/



//when mouse enters make width 1500px 
$(".block").each(function () {
    $(this).on("mouseenter", function () {
        $(this).animate({


            width: 1500
            // Animation complete.
        });
    });

})




//when mouse releases make width revert to original size
$(".block").each(function () {
    $(this).on("mouseleave", function () {
        $(this).animate({


            width: 100
            // Animation complete.
        });
    });

})







/*
$(".block").each(function () {
    $(this).on("click", function () {
        $(this).css("border", "solid", "white")



    })


})
*/

//makes the lines turn white upon click
$(document).ready(function () {

    // Attach a click event handler to the entire document
    $(document).click(function () {



        $(".block").css("background-color", "white");
    });

})

//makes backround black upon click
$(document).ready(function () {

    // Attach a click event handler to the entire document
    $(document).click(function () {


        // Change the background color of the <body> element
        $("body").css("background-color", "black");
    });

})

