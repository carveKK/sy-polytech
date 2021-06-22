let mobileStatusHeader = false;
$(document).ready(function () {
    const filter = "win16|win32|win64|mac|macintel";
    const webType = "";

    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            //mobile
            mobileStatusHeader = true;
        } else {
            //pc
            mobileStatusHeader = false;
            headerManager();
        }
    }

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
    if (mobileStatusHeader) {
        const menu = $('#menu');
        if (index > 0) {
            menu.css("color", "white");
        } else {
            menu.css("color", "black");
        }
    } else {
        const $headerWrap = $('#headerWrap');
        const $headerLogo = $('.companyLogo');
        console.log(index);

        if (index > 0) {
            $headerWrap.css('color', 'black');
            $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidth.png")');
        } else {
            $headerWrap.css('color', 'white');
            $headerWrap.css('background-color', 'rgba(0,0,0,0)');
            $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidthWhite.png")');
        }
    }


    // if(index == 2){
    //     $headerWrap.css('display', 'none');
    //     return;
    // }else{
    //     $headerWrap.css('display', 'block');
    // }
}

function home() {
    locationSearch();
    location.href = "/" + locationSearch();
}

function productPvc() {
    locationSearch();
    location.href = "/product/pvc" + locationSearch();
}

function productOlefin() {
    locationSearch();
    location.href = "/product/olefin" + locationSearch();
}

function productXlpe() {
    locationSearch();
    location.href = "/product/xlpe" + locationSearch();
}

function productTpe() {
    locationSearch();
    location.href = "/product/tpe" + locationSearch();
}

function productNemoTab() {
    locationSearch();
    location.href = "/product/nemoTab" + locationSearch();
}

function ceoInfo() {
    locationSearch();
    location.href = "/company/ceo" + locationSearch();
}

function companyInfo() {
    locationSearch();
    location.href = "/company/overview" + locationSearch();
}

function companyOrigin() {
    locationSearch();
    location.href = "/company/origin" + locationSearch();
}

function map() {
    locationSearch();
    location.href = "/company/route" + locationSearch();
}

function inquiry() {
    locationSearch();
    location.href = "/customer/inquiry" + locationSearch();
}

function inquiryProduct() {
    locationSearch();
    location.href = "/customer/productInquiry" + locationSearch();
}

function certificates() {
    locationSearch();
    location.href = "/rnd/certificates" + locationSearch();
}

function equipment() {
    locationSearch();
    location.href = "/rnd/equipment" + locationSearch();
}

function rndDefault() {
    location.href = "/rnd/intro" + locationSearch();
}

function lanKor() {
    let nowPath = location.pathname + "?lang=ko";
    location.href = nowPath;
}

function lanEng() {
    let nowPath = location.pathname + "?lang=en";
    location.href = nowPath;
}

function locationSearch() {
    let nowSearch = location.search;
    return nowSearch;
}

