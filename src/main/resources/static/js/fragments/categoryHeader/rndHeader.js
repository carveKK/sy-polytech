
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
    headerImage.css('background-position', '50% 45%');

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