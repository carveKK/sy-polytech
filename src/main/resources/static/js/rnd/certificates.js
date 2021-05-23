$(document).ready(function () {

    for (let i = 1; i<21; i++){
        textManager(i);
    }
});

function textManager(index) {
    let nowContent =  $('.content'+index);

    switch (index) {
        case 1: nowContent.text("[SY-NA4-전기용품안전인증서]");
        break;

        case 2: nowContent.text("[SY-NB4-전기용품안전인증서(A)]");
            break;

        case 3: nowContent.text("[SY-NB4-전기용품안전인증서(B)]");
            break;

        case 4: nowContent.text("[SY-G16A-전기용품안전인증서]");
            break;

        case 5: nowContent.text("[디자인등록증]");
            break;

        case 6: nowContent.text("[디자인등록증]");
            break;

        case 7: nowContent.text("[우수디자인선전증]");
            break;

        case 8:nowContent.text("[유통표준코드회원증]");
            break;

        case 9: nowContent.text("[특허증-멀티탭]");
            break;

        case 10: nowContent.text("[특허증-멀티탭케이스]");
            break;

        case 11: nowContent.text("[특허증-연결단자]");
            break;

        case 12: nowContent.text("[디자인혁신유망기업]");
            break;

        case 13: nowContent.text("[방송통신적합등록필증-SY-NB3-USB]");
            break;

        case 14: nowContent.text("[상표등록증-슈퍼탭]");
            break;

        case 15: nowContent.text("[상표등록증-피코탭]");
            break;

        case 16: nowContent.text("[상표등록증-멀티탭]");
            break;

        case 17: nowContent.text("[서비스표등록증-슈퍼탭]");
            break;

        case 18: nowContent.text("[서비스표등록증-피코탭]");
            break;

        case 19: nowContent.text("[실용신안등록증]");
            break;

        case 20: nowContent.text("[안전인증서-SY-NA3-USB]");
            break;


    }
}