let secondOpening = true;
let mainFirstPageTextIndex = 1;
let accountAnimation = false;
let accountEvent;

$(document).ready(function () {

    //fullPage
    new fullpage('#fullpage', {
        licenseKey: 'D1AF2031-25C74F5F-8F279168-8FF34DAF',
        paddingTop: '0px',
        paddingBottom: '0px',
        autoScrolling: true,
        scrollingSpeed: 700,
        slidesNavigation: false,
        controlArrows: false, //슬라이더 버튼
        keyboardScrolling: false, //키보드로 슬라이더 이동
        dragAndMove: true, //마우스나 손가락을 써서 슬라이더 이동
        fadingEffect: 'slides'
    });
    //fullPageEnd


    //swiper
    const mainPage = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal', // 수직, 수평 수평 : vertical
        loop: true,
        speed: 700,
        autoplay: {
            delay: 7000,
        },
    });


    mainSecondSizeController();

    var filter = "win16|win32|win64|mac|macintel";
    var webType = "";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            $('.inquiryBodyContent p').remove();
        } else {

        }
    }

    $('.topContent').on("click", function (event) {
        if (secondOpening) {
            const $thisId = $(this).children().attr("id");
            const $onId = $('.topContentOn').children().attr("id");
            const $slideImage02 = $('.slideImage02');
            const $slideImage03 = $('.slideImage03');
            if ($thisId != $onId) {
                event.stopPropagation();
                const $mainSecondImage02 = $('.mainSecondImg02');
                const $mainSecondImage03 = $('.mainSecondImg03');

                const $mainContentP01 = $('.mainContentP01');
                const $mainContentP02 = $('.mainContentP02');
                const $mainContentP03 = $('.mainContentP03');

                const $mainContentSpanP = $('.mainContent > span > p');
                const $mainContentRightP = $('.mainContentRight > p');

                $('.topContent').removeClass("topContentOn");
                $(this).addClass("topContentOn");

                $slideImage02.css("opacity", "0");
                $slideImage03.css("opacity", "0");
                $mainContentSpanP.css("height", "0");
                $mainContentRightP.css("opacity", "0");

                switch ($thisId) {
                    case 'forHuman':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/forHuman_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/forHuman_03.jpg");
                        $mainContentP01.text("더 안전하고, 편리한 세상을 위해");
                        $mainContentP02.text("더 나은 제품을 만들어갑니다.");
                        $mainContentP03.text("");
                        $mainContentRightP.text("아이들이 마음 편히 놀 수 있게\n더 편리하고 안전한 세상을 위해\nSY-POLYTECH이 앞장서겠습니다.");

                        break;

                    case 'forNature':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/forNature_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/forNature_03.jpg");
                        $mainContentP01.text("우리의 후손을 위해서");
                        $mainContentP02.text("지금의 환경을 지켜나갑니다.");
                        $mainContentP03.text("");
                        $mainContentRightP.text("지속 가능한 발전을 하기 위해,\nSY-POLYTECH은 앞장서 녹색성장을 추구하고 있습니다.");
                        break;

                    case 'bestQuality':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/bestQuality_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/bestQuality_03.jpg");
                        $mainContentP01.text("최고의 제품을 위해");
                        $mainContentP02.text("최고의 퀄리티를 위해");
                        $mainContentP03.text("끊임없이 관리하고 연구합니다.");
                        $mainContentRightP.text("항상 마음 놓고 사용하실 수 있게,\n고객님의 신뢰를 최우선으로 하여,\nSY-POLYTECH은 엄격한 품질관리를 시행하고 있습니다.");
                        break;

                    case 'globalLeader':
                        $mainSecondImage02.attr("src", "images/mainPage/mainSecondImage/globalLeader_02.jpg");
                        $mainSecondImage03.attr("src", "images/mainPage/mainSecondImage/globalLeader_03.jpg");
                        $mainContentP01.text("한국을 넘어 전 세계로");
                        $mainContentP02.text("저희가 이끌어 나가겠습니다.");
                        $mainContentP03.text("");
                        $mainContentRightP.text("대한민국을 넘어\n전 세계 어디서든 가치를 인정받을 수 있게,\nSY-POLYTECH이 앞장서서 이끌어 나가겠습니다.");
                        break;
                }
                $mainContentRightP.html($mainContentRightP.html().replace(/\n/g, '<br/>'));

                $slideImage02.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');

                $slideImage03.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');

                $mainContentSpanP.stop().animate({
                    'height': '65',
                }, 1500, 'swing');

                $mainContentRightP.stop().animate({
                    'opacity': '1',
                }, 1500, 'swing');
            }
        }
    })

});

$(window).resize(mainSecondSizeController);

/*function mainThirdReposition(){
    const mainThirdProductBox = $(".mainThirdProductBox");
    let size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    };

    if(size.width <= 1800){
        mainThirdProductBox.css("right", 100);
    }else{
        mainThirdProductBox.css("right", "calc((100vw - 1800px) + 100px)");
    }
}*/

function mainAnimation(index) {
    if (index == 1 || index == 2) {
        $("#categoryBookMarkWrap").css('display', 'block');
    } else {
        $("#categoryBookMarkWrap").css('display', 'none');
    }
    if (index == 2) {
        setTimeout(mainSecondAnimation, 200);
    }
}

function categoryBookMarkAnimation(index) {
    const $categoryHeaderH2 = $('.categoryHeaderH2');
    const $categoryHeaderP = $('.categoryHeaderP');
    const $categoryIcon = $('.categoryIcon');
    const $categoryBodyContentP1 = $('.categoryBodyContentP1');
    const $categoryBodyContentP2 = $('.categoryBodyContentP2');
    const $categoryBodyContentP3 = $('.categoryBodyContentP3');
    const $categoryBookMarkWrap = $('#categoryBookMarkWrap');

    if (index == 1) {
        $categoryHeaderH2.text("Product");
        $categoryHeaderP.text("제품정보");
        $categoryBodyContentP1.text("PVC, OLEFIN, XLPE, TPE 등");
        $categoryBodyContentP2.text("당사가 생산하는 제품을");
        $categoryBodyContentP3.text("소개해드리겠습니다.");
        $categoryIcon.attr("src", "/images/mainPage/bookMark/polymerIcon.png");

        $categoryBookMarkWrap.animate({
            'background-color': '#0063ff',
        }, 250, 'swing');
    }
    if (index == 2) {
        $categoryHeaderH2.text("Slogan");
        $categoryHeaderP.text("브랜드슬로건");
        $categoryBodyContentP1.text("SY-PLOYTECH의 슬로건");
        $categoryBodyContentP2.text("회사를 운영하며 가장 중요시 생각하는");
        $categoryBodyContentP3.text("브랜드슬로건을 소개해드리겠습니다.");
        $categoryIcon.attr("src", "/images/mainPage/bookMark/categoryIcon.png");

        $categoryBookMarkWrap.animate({
            'background-color': '#00af00',
        }, 250, 'swing');

        customerNoneEvent();
    }

    if (index == 3) {
        accountAnimation = true;
        customerEvent();
    }

    if (index == 4) {
        customerNoneEvent();
    }
}

function mainSecondAnimation() {
    secondOpening = false;
    const $mainContentSpanP = $('.mainContent > span > p');
    const $mainContentRightP = $('.mainContentRight > p');
    const $slideImage02 = $('.slideImage02');
    const $slideImage03 = $('.slideImage03');

    setTimeout(function () {
        secondOpening = true;
    }, 1300);

    $slideImage02.animate({
        'left': '50',
    }, 1000, 'swing');

    $slideImage03.animate({
        'right': '0',
    }, 1000, 'swing');

    setTimeout(function () {
        $mainContentSpanP.animate({
            'height': '65',
        }, 1500, 'swing');

        $mainContentRightP.animate({
            'opacity': '1',
        }, 1500, 'swing');

    }, 500);
}

function mainFirstPageStartAnimation() {
    const slideImage = $(".slideImageContent");
    const textBoxHead = $(".textBoxHead");
    const textBoxBody = $('.textBoxBody');
    textBoxHead.css("opacity", "1");
    textBoxBody.css("opacity", "1");

    slideImage.css("transition", "all 3500ms ease-in-out");
    slideImage.css("transform", "scale(1)");
    slideImage.css("left", 0);

    textBoxHead.css("transition", "all 2s ease-in-out");
    textBoxHead.css("width", "700px");

    textBoxBody.css("transition", "all 2s ease-in-out");
    textBoxBody.css("width", "740px");
    setTimeout(mainFirstPageEndAnimation, 7100);

}

function mainFirstPageEndAnimation() {
    const slideImage = $(".slideImageContent");
    const textBoxHead = $(".textBoxHead");
    const textBoxBody = $('.textBoxBody');




    slideImage.css("transition", "none");
    slideImage.css("transform", "scale(1.1, 1.1)");
    slideImage.css("left", "5%");

    textBoxHead.css("transition", "none");
    textBoxHead.css("width", "0");

    textBoxBody.css("transition", "none");
    textBoxBody.css("width", "0");
}

function mainFirstPageTextAnimation(index) {
    const textBoxHead = $(".textBoxHead");
    const textBoxBody = $('.textBoxBody');
    let innoSpan = "<span class=\"innoSpan\">INNOVATION</span>";
    let solutionSpan = "<span class=\"solutionSpan\">SOLUTION</span>";
    let collaboSpan = "<span class=\"collaboSpan\">COLLABORATION</span>";
    let changeSpan = "<span class=\"changeSpan\">CHANGE</span>";

    const textBoxHeadSpan = $(".textBoxHead > span");

    textBoxHead.css("transition", "none");
    textBoxHead.css("opacity", "0");

    textBoxBody.css("transition", "none");
    textBoxBody.css("opacity", "0");
    textBoxHeadSpan.removeClass();
    switch (index) {
        case 1:
            textBoxHeadSpan.addClass("changeSpan");
            textBoxHeadSpan.text("CHANGE");
            textBoxBody.text("에스와이폴리텍은 신기술, 신제품 개발을 멈추지 않습니다.");
            break;

        case 2:
            textBoxHeadSpan.addClass("collaboSpan");
            textBoxHeadSpan.text("COLLABORATION");
            textBoxBody.text("에스와이폴리텍은 다양한 협력사와 함께 최고의 제품을 만들어갑니다.");
            break;

        case 3:
            textBoxHeadSpan.addClass("solutionSpan");
            textBoxHeadSpan.text("SOLUTION");
            textBoxBody.text("에스와이폴리텍은 고객님께 최고의 해결책과 최고의 품질을 약속드립니다.");
            break;

        case 4:
            textBoxHeadSpan.addClass("innoSpan");
            textBoxHeadSpan.text("INNOVATION");
            textBoxBody.text("에스와이폴리텍은 혁신적인 기술을 위해 끊임없이 연구합니다.");
            break;

        case 5:
            textBoxHeadSpan.addClass("changeSpan");
            textBoxHeadSpan.text("CHANGE");
            textBoxBody.text("에스와이폴리텍은 신기술, 신제품 개발을 멈추지 않습니다.");
            break;
    }
}

function mainSecondSizeController() {
    const productBox = $(".productBox");
    const middleBox = $(".middleBox");
    const bottomBox = $('.bottomBox');
    const productBoxHead = $('.productBoxHead');
    const productBoxImageHead = $('.productBoxImageHead');

    let productBoxWidth = productBox.width();

    productBox.css('height', productBoxWidth + "px");
    middleBox.css('left', 45 + productBoxWidth + "px");
    bottomBox.css('top', productBoxWidth + 5 + "px");
    productBoxHead.css('line-height', productBoxWidth + "px");
    productBoxImageHead.css('line-height', productBoxWidth + "px");
}

function customerEvent() {

    const leftContentBox = $('.leftContentBox');
    const rightContentBox = $('.rightContentBox');
    leftContentBox.css("transition", "all ease-in-out 700ms");
    rightContentBox.css("transition", "all ease-in-out 700ms");
    let leftContentBoxLeft = 0;
    let rightContentBoxRight = -162;

    accountEvent = setInterval(function () {
        leftContentBoxLeft -= 224;
        rightContentBoxRight -= 224;
        leftContentBox.css("left", leftContentBoxLeft);
        rightContentBox.css("right", rightContentBoxRight);

        if (leftContentBoxLeft == -1792) {
            setTimeout(function () {
                leftContentBox.css("transition", "none");
                leftContentBox.css("left", 0);
                rightContentBox.css("transition", "none");
                rightContentBox.css("right", "-162px");
            }, 800);

            setTimeout(function () {
                leftContentBox.css("transition", "all ease-in-out 700ms");
                leftContentBoxLeft = 0;
                rightContentBox.css("transition", "all ease-in-out 700ms");
                rightContentBoxRight = -162;
            }, 1000);
        }

    }, 1500);
}

function customerNoneEvent() {
    const leftContentBox = $('.leftContentBox');
    const rightContentBox = $('.rightContentBox');
    leftContentBox.css("transition", "none");
    leftContentBox.css("left", 0);
    rightContentBox.css("transition", "none");
    rightContentBox.css("right", "-162px");

    clearInterval(accountEvent);
}


