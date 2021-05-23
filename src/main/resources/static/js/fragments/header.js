
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

    if (index > 0) {
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

function productPvc() {
    location.href = "/product/pvc";
}

function productOlefin() {
    location.href = "/product/olefin";
}

function productXlpe() {
    location.href = "/product/xlpe";
}

function productTpl() {
    location.href = "/product/tpl";
}

function productNemoTab() {
    location.href = "/product/nemoTab";
}

function ceoInfo() {
    location.href = "/company/ceo";
}

function companyInfo() {
    location.href = "/company/overview";
}

function companyOrigin() {
    location.href = "/company/origin";
}

function map() {
    location.href = "/company/route";
}

function inquiry() {
    location.href = "/customer/inquiry";
}

function inquiryProduct() {
    location.href = "/customer/productInquiry";
}

function certificates() {
    location.href = "/rnd/certificates";
}

function equipment() {
    location.href = "/rnd/equipment"
}

function rndDefault() {
    location.href = "/rnd/intro"
}

