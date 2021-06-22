
$(document).ready(function () {

    const headerWrap = $("#headerWrap");
    const filter = "win16|win32|win64|mac|macintel";
    const webType = "";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            //mobile
            headerWrap.remove();
            $('.wrap').prepend("<div class='sidebarWrap'></div>");
            $(".sidebarWrap").load("/mobile/sideBar");
            $("#menu").css("color", "white");
            $(function () {
                $.getScript("/js/fragments/mobileSideBar.js", function (data, textStatus, jqxhr) {
                    console.log(data); // Data returned
                    console.log(textStatus); // Success
                    console.log(jqxhr.status); // 200
                    console.log("Load was performed.");
                });
            });
        } else {
        }
    }

    let nowLocation = location.pathname;
    nowLocation = nowLocation.replace("/product/", "");
    $('.inProductBigTitle').removeClass("inProductBigTitleOn");

    document.addEventListener('scroll', function () {
        let currentScrollValue = document.documentElement.scrollTop;
        console.log('currentScrollValue is ' + currentScrollValue);
        if (currentScrollValue >= 150) {
            $("#menu").css("color", "black");
        }else if(currentScrollValue <= 5){
            $("#menu").css("color", "white");
        }
    })


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
            location.href = "/product/pvc"+locationSearch();
            break;

        case "OLEFIN" :
            location.href = "/product/olefin"+locationSearch();
            break;

        case "XLPE" :
            location.href = "/product/xlpe"+locationSearch();
            break;

        case "TPE" :
            location.href = "/product/tpe"+locationSearch();
            break;

        case "nemoTab" :
            location.href = "/product/nemoTab"+locationSearch();
            break;

        default :
            return;
    }

}