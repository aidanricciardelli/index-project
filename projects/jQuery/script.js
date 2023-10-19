console.log("hello");

for (let step = 0; step < 1000; step++) {
    let blocks = '<div class="block" style="width: 100vw; height: 10px; border:2px solid black;">';
    $("body").append(blocks);
}


let randomValue = Math.random();


$(".block").each(function () {
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(0,255,0)");


    })


})