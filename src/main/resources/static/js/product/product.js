let koOrEn = "";
let whichProduct = "";

$(document).ready(function () {
    koOrEn = location.search;
    whichProduct = location.pathname;

    if (!!whichProduct && !!koOrEn && whichProduct == "/product/nemoTab") {
        nemoTabImageDependingWhetherKoOrEn(koOrEn);
    }

    if (!!whichProduct && !!koOrEn && whichProduct == "/product/tpe") {
        tpeCssDependingWhetherKoOrEn(koOrEn);
    }

    $('.inImage').on("click", function () {
        const inImage = $('.inImage');
        const $this = $(this);
        const divArea = document.getElementById("pvcDefaultExplanation");

        clickImageThenToGoPages(inImage, divArea, $this);
    });

    $('.linkBox a').click(function () {
        const targetPosition = $($(this).attr('href')).offset().top;
        const addPosition = targetPosition - 30;
        $('body,html').animate({
            scrollTop: addPosition
        }, 500);
    });

});

function clickImageThenToGoPages(inImage, divArea, $this) {

    if (!!divArea)
        divArea.remove();

    inImage.removeClass('inImageA');
    $(this).addClass('inImageA');

    const container2_1 = $('.container');
    const thisId = $this.attr("id");

    switch (thisId) {
        case "pvcCable":
            container2_1.load("/pvc/cable");
            break;

        case "pvcHose":
            container2_1.load("/pvc/hose");
            break;

        case "pvcConstruction":
            container2_1.load("/pvc/construction");
            break;

        case "pvcToyMiscellaneous":
            container2_1.load("/pvc/toyMiscellaneous");
            break;

        case "olefinCable":
            container2_1.load("/olefin/cable");
            break;

        case "olefinVehicle":
            container2_1.load("/olefin/vehicle");
            break;

        case "olefinHomeApplication":
            container2_1.load("/olefin/homeApplication");
            break;

        case "olefinSemiConducting":
            container2_1.load("/olefin/semiConducting");
            break;

        case "xlpeGeneral":
            container2_1.load("/xlpe/general");
            break;

        case "xlpeHalogenated":
            container2_1.load("/xlpe/halogenated");
            break;

        case "xlpeLszh":
            container2_1.load("/xlpe/lszh");
            break;

        case "tpeTpu":
            container2_1.load("/tpe/tpu");
            break;

        case "tpeTpe":
            container2_1.load("/tpe/tpe");
            break;

        case "tpeTpee":
            container2_1.load("/tpe/tpee");
            break;
    }
}

/**
 * nemoTabImageDependingWhetherKoOrEn: 다국어 Ko,En에 따라 nemoTab image 변경
 * @koOrEn {string} "?lang=ko" || "?lang=en"
 */
function nemoTabImageDependingWhetherKoOrEn(koOrEn) {
    if (!koOrEn)
        return;

    if (koOrEn == "?lang=en") {
        $("#nemoTabInfoImage").attr("src", "../../images/product/nemoTabInfoEn.png");
    } else {
        $("#nemoTabInfoImage").attr("src", "../../images/product/nemoTabInfoKo.png");
    }
}

/**
 * tpeCssDependingWhetherKoOrEn: 다국어 Ko,En에 따라 tpeDefault image css 변경
 * @koOrEn {string} "?lang=ko" || "?lang=en"
 */
function tpeCssDependingWhetherKoOrEn(koOrEn) {
    if (!koOrEn)
        return;

    if (koOrEn == "?lang=en") {
        $("#tpeImage").removeClass("tpeImageKo");
        $("#tpuImage").removeClass("tpuImageKo");
        $("#tpeImage").addClass("tpeImageEn");
        $("#tpuImage").addClass("tpuImageEn");
    } else {
        $("#tpeImage").removeClass("tpeImageEn");
        $("#tpuImage").removeClass("tpuImageEn");
        $("#tpeImage").addClass("tpeImageKo");
        $("#tpuImage").addClass("tpuImageKo");
    }
}