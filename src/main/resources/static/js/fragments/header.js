
$(document).ready(function () {
    headerManager();
});

function headerManager() {
    var $headerWrap = $('#headerWrap');
    var $headerLogo = $('.companyLogo');
    var pathName = location.pathname;

    console.log(pathName);

    if (pathName != "/") {
        $headerWrap.css('color', 'black');
        $headerWrap.css('background-color', 'white');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidth.png")');

    } else {
        $headerWrap.css('color', 'white');
        $headerWrap.css('background-color', 'rgba(0,0,0,0)');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoStringWhite.png")');
    }
}