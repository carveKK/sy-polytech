
$(document).ready(function () {

    const headerImage = $('.container1');
    const headerWrap = $("#headerWrap");
    const filter = "win16|win32|win64|mac|macintel";
    const webType = "";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            //mobile
            headerWrap.remove();
            $('.wrap').prepend("<div class='sidebarWrap'></div>");
            $(".sidebarWrap").load("/mobile/sideBar");
            headerImage.css('background-position', '50% 10%');
            $("#menu").css("color", "white");

            $(function () {
                headerImage.css('background-position', '50% 45%');
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



    $('.productBigTitle').click(function() {
        const value = this.innerText;
        if (!!window.clickProductBigTitle(value) && !!window.clickProductBigTitle(value) instanceof Function) {
            window.clickProductBigTitle(value);
        }
    });

    document.addEventListener('scroll', function () {
        let currentScrollValue = document.documentElement.scrollTop;
        console.log('currentScrollValue is ' + currentScrollValue);
        if (currentScrollValue >= 160) {
            $("#menu").css("color", "black");
        }else if(currentScrollValue <= 5){
            $("#menu").css("color", "white");
        }
    })
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