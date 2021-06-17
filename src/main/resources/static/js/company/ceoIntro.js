$(document).ready(function () {
    $("#ceoIntro").addClass("menuOn");


    var filter = "win16|win32|win64|mac|macintel";
    var webType = "";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            $(".firstRight").css("right", 0);
            $(".firstLeft").css("left", 0);

            document.addEventListener('scroll', function () {
                let currentScrollValue = document.documentElement.scrollTop;
                console.log('currentScrollValue is ' + currentScrollValue);

                if (currentScrollValue >= 250) {
                    $('.secondContent').css("top", 0);
                }

            });
        } else {
            $(".firstRight").css("right", 10);
            $(".firstLeft").css("left", 10);

            let currentScrollValue = document.documentElement.scrollTop;
            document.addEventListener('scroll', function () {
                currentScrollValue = document.documentElement.scrollTop;
                console.log('currentScrollValue is ' + currentScrollValue);
                if (currentScrollValue >= 120) {
                    $('.secondContent').css("top", 0);
                }

            })
        }
    }
});