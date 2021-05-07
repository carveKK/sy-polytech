
$(document).ready(function () {

    $('.productBigTitle').click(function() {
        const value = this.innerText;

        if (!!window.clickProductBigTitle(value) && !!window.clickProductBigTitle(value) instanceof Function) {
            window.clickProductBigTitle(value);
        }
    });

});

function productPvc(){
    location.href = "/productList/productPvc";
}

function productOlefin(){
    location.href = "/productList/productOlefin";
}

function productXlpe(){
    location.href = "/productList/productXlpe";
}

function productTpl(){
    location.href = "/productList/productTpl";
}

function productNemoTab(){
    location.href = "/productList/productNemoTab";
}

function clickProductBigTitle(value) {

    switch (value) {
        case "PVC" :
            location.href = "/product/pvc";
            break;

        case "OLEFIN" :
            location.href = "/product/olefin";
            break;

        case "XLPE" :
            location.href = "/product/xlpe";
            break;

        case "TPL" :
            location.href = "/product/tpl";
            break;

        case "nemoTab" :
            location.href = "/product/nemoTab";
            break;

        default :
            return;
    }

}