$(document).ready(function () {

    for (let i = 1; i<13; i++){
        textManager(i);
    }
});

function textManager(index) {
    let nowContent =  $('.content'+index);

    switch (index) {
        case 1: nowContent.text("[비중계]");
        break;

        case 2: nowContent.text("[디지털 인장강도/신율 시험기]");
            break;

        case 3: nowContent.text("[시험용 압출기]");
            break;

        case 4: nowContent.text("[100L 소형 믹서]");
            break;

        case 5: nowContent.text("[내한타격 시험기]");
            break;

        case 6: nowContent.text("[열 안정성 시험기]");
            break;

        case 7: nowContent.text("[시펀 프레스]");
            break;

        case 8:nowContent.text("[체적저항 시험기]");
            break;

        case 9: nowContent.text("[시험용 오븐]");
            break;

        case 10: nowContent.text("[롤밀]");
            break;

        case 11: nowContent.text("[산소지수 시험기]");
            break;

        case 12: nowContent.text("[내유성 시험기]");
            break;

    }
}