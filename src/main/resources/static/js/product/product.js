let koOrEn = ""

$(document).ready(function () {
    koOrEn = location.search;
    cssDependingWhetherKoOrEn(koOrEn);

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
 * cssDependingWhetherKoOrEn: 다국어 Ko,En에 따라 image 변경
 * @koOrEn {string} "?lang=ko" || "?lang=en"
 */
function cssDependingWhetherKoOrEn(koOrEn) {
    if (!koOrEn)
        return;

    if (koOrEn == "?lang=en") {
        $("#nemoTabInfoImage").attr("src", "../../images/product/nemoTabInfoEn.png");
    } else {
        $("#nemoTabInfoImage").attr("src", "../../images/product/nemoTabInfoKo.png");
    }
}