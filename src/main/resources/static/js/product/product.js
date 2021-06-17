
$(document).ready(function () {

    $('.inImage').on("click", function () {
        const inImage = $('.inImage');
        const divArea = document.getElementById("pvcDefaultExplanation");

        if (!!divArea)
            divArea.remove();

        inImage.removeClass('inImageA');
        $(this).addClass('inImageA');

        const container2_1 = $('.container');
        const thisId = $(this).attr("id");

       switch (thisId) {
            case "cable":
                container2_1.load("/pvc/cable");
                break;

           case "hose":
               container2_1.load("/pvc/hose");
               break;

           case "construction":
               container2_1.load("/pvc/construction");
               break;

           case "toyMiscellaneous":
               container2_1.load("/pvc/toyMiscellaneous");
               break;
       }
    });

});

