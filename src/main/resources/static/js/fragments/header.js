
$(document).ready(function () {
    headerManager();
});


function headerManager() {
    const $headerWrap = $('#headerWrap');
    const $headerLogo = $('.companyLogo');
    let pathName = location.pathname;

    if (pathName != "/") {
        $headerWrap.css('position', 'absolute');
   /*     $headerWrap.css('color', 'black');
        $headerWrap.css('background-color', 'white');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidth.png")');*/

    } else {
        $headerWrap.css('position', 'fixed');
        $headerWrap.css('color', 'white');
        $headerWrap.css('background-color', 'rgba(0,0,0,0)');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidthWhite.png")');

    }
}

function mainHeaderManager(index) {
    const $headerWrap = $('#headerWrap');
    const $headerLogo = $('.companyLogo');
    console.log(index);

    if (index > 1) {
        $headerWrap.css('color', 'black');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidth.png")');
    }else{
        $headerWrap.css('color', 'white');
        $headerWrap.css('background-color', 'rgba(0,0,0,0)');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidthWhite.png")');
    }

    // if(index == 2){
    //     $headerWrap.css('display', 'none');
    //     return;
    // }else{
    //     $headerWrap.css('display', 'block');
    // }


}

function home() {
    location.href = "/";
}

function ceoInfo() {
    location.href = "/company/ceo";
}

function map() {
    location.href = "/company/map";
}

function companyInfo() {
    location.href = "/company/info";
}

function inquiry() {
    location.href = "/customer/inquiry";
}

