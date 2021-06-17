
$(document).ready(function () {

    let nowLocation = location.pathname;
    nowLocation = nowLocation.replace("/rnd/", "");
    $('.inProductBigTitle').removeClass("inProductBigTitleOn");


    switch (nowLocation) {
        case "intro":
            $('#intro').addClass("inProductBigTitleOn");
            break;

        case "equipment":
            $('#equipment').addClass("inProductBigTitleOn");
            break;

        case "certificates":
            $('#certificates').addClass("inProductBigTitleOn");
            break;
    }

    const headerImage = $('.container1');
    let filter = "win16|win32|win64|mac|macintel";
    let webType = "";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            headerImage.css('background-position', '50% 10%');

        } else {
            headerImage.css('background-position', '50% 45%');
        }
    }





    $('.productBigTitle').click(function() {
        const value = this.innerText;
        if (!!window.clickProductBigTitle(value) && !!window.clickProductBigTitle(value) instanceof Function) {
            window.clickProductBigTitle(value);
        }
    });

});

function clickProductBigTitle(value) {

    switch (value) {
        case "PVC" :
            location.href = "/rnd" +
                "/pvc";
            break;

        case "OLEFIN" :
            location.href = "/product/olefin";
            break;

        case "XLPE" :
            location.href = "/product/xlpe";
            break;

        case "TPE" :
            location.href = "/product/tpe";
            break;

        case "nemoTab" :
            location.href = "/product/nemoTab";
            break;

        default :
            return;
    }

}