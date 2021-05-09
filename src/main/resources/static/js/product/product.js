
$(document).ready(function () {
    $('.inImage').on("click", function () {
        const inImage = $('.inImage');
        inImage.removeClass('inImageA');
        $(this).addClass('inImageA');

        const container2_1 = $('.container2-1');
        const thisId = $(this).attr("id");

       switch (thisId) {
            case "flexible":
                container2_1.load("/pvc/flexible");
                break;

           case "fr":
               container2_1.load("/pvc/fr");
               break;

           case "hybrid":
               container2_1.load("/pvc/hybrid");
               break;

           case "pf":
               container2_1.load("/pvc/pf");
               break;

           case "rigid":
               container2_1.load("/pvc/rigid");
               break;
       }


    });
});

