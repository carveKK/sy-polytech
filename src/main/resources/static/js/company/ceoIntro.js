let koOrEn = ""

$(document).ready(function () {
    koOrEn = location.search;
    cssDependingWhetherKoOrEn(koOrEn);

    $("#ceoIntro").addClass("menuOn");

    const filter = "win16|win32|win64|mac|macintel";
    let webType = "";
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

/**
 * cssDependingWhetherKoOrEn: 다국어 Ko,En에 따라 css 변경
 * @koOrEn {string} "?lang=ko" || "?lang=en"
 */
function cssDependingWhetherKoOrEn(koOrEn) {
    if (!koOrEn)
        return;

    if (koOrEn == "?lang=en") {
        $("#ceoPosition").removeClass("ceoPositionKo");
        $("#ceoPosition").addClass("ceoPositionEn");
    } else {
        $("#ceoPosition").removeClass("ceoPositionEn");
        $("#ceoPosition").addClass("ceoPositionKo");
    }
}