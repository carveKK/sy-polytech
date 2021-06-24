$(document).ready(function(){
    $('.inquiryBtn').on("click", function (event) {
        location.href = "/customer/inquiry"+nowSearchData;
    })

    $('.categoryBtn').on("click", function (event) {
        let nowBtnData = $('.categoryHeaderH2').text();

        if(nowBtnData == "Product"){
            location.href = "/product/pvc"+nowSearchData;
        }else{
            location.href = "/rnd/intro"+nowSearchData;
        }
    })
})