$(document).ready(function () {
    $("#companyOrigin").addClass("menuOn");
    let nowSearchData = location.search;
    if (nowSearchData == "?lang=en") {
        $('.originContent img').attr('src', '/images/company/companyOrigin/origin_en.png')
    } else {
        $('.originContent img').attr('src', '/images/company/companyOrigin/origin.png')
    }
});