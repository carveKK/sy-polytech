
$(document).ready(function () {

    let nowLocation = location.pathname;
    nowLocation = nowLocation.replace("/product/", "");
    $('.inProductBigTitle').removeClass("inProductBigTitleOn");


    switch (nowLocation) {
        case "pvc":
            $('#pvc').addClass("inProductBigTitleOn");
            break;

        case "olefin":
            $('#olefin').addClass("inProductBigTitleOn");
            break;

        case "xlpe":
            $('#xlpe').addClass("inProductBigTitleOn");
            break;

        case "tpe":
            $('#tpe').addClass("inProductBigTitleOn");
            break;

        case "nemoTab":
            $('#nemoTab').addClass("inProductBigTitleOn");
            break;
    }


    const headerImage = $('.container1');
    headerImage.css('background-position', '50% 75%');

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
            location.href = "/product/pvc";
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