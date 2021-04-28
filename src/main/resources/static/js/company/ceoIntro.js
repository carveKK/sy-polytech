$(document).ready(function () {
    $("#ceoIntro").addClass("menuOn");

    $(".firstLeft").css("left", 10);
    $(".firstRight").css("right", 10);

    let currentScrollValue = document.documentElement.scrollTop;
    console.log('currentScrollValue is ' + currentScrollValue);

    document.addEventListener('scroll', function () {
        currentScrollValue = document.documentElement.scrollTop;
        console.log('currentScrollValue is ' + currentScrollValue);

        if(currentScrollValue >= 120){
            $('.secondContent').css("top", 0);
        }
    })
});