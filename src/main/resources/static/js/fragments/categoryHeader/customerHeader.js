$(document).ready(function () {
    const headerImage = $('.imageContainer');
    headerImage.css('background-position', '50% 50%');

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

    document.addEventListener('scroll', function () {
        let currentScrollValue = document.documentElement.scrollTop;
        console.log('currentScrollValue is ' + currentScrollValue);
        if (currentScrollValue >= 150) {
            $("#menu").css("color", "black");
        }else if(currentScrollValue <= 5){
            $("#menu").css("color", "white");
        }
    })

});

function customerInquiry(){
    location.href = "/customer/inquiry"+locationSearch();
}

function productInquiry(){
    location.href = "/customer/productInquiry"+locationSearch();
}



