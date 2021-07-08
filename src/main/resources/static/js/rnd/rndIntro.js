$(document).ready(function () {
    let currentScrollValue = document.documentElement.scrollTop;
    let contentActivate = [true, true, true, true];
    let contentActivate2 = true;
    let contentNote1 = $('.contentNote1');
    let contentNote2 = $('.contentNote2');
    let contentNote3 = $('.contentNote3');
    let contentNote4 = $('.contentNote4');
    let rndGoalHeader = $('.rndGoalHeader');
    let rndGoalContent = $('.rndGoalContent');
    let rndIntroHeaderH1 = $('.rndIntroHeader > h1');
    let rndIntroHeaderP = $('.rndIntroHeader > p');
    let rndSloganHeader = $('.rndSloganHeader');

    var filter = "win16|win32|win64|mac|macintel";
    var webType = "";

    rndIntroHeaderH1.css('opacity', '1');
    rndIntroHeaderP.css('opacity', '1');
    rndIntroHeaderH1.css('top', '0');
    rndIntroHeaderP.css('top', '0');

    console.log('currentScrollValue is ' + currentScrollValue);

    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            document.addEventListener('scroll', function () {
                currentScrollValue = document.documentElement.scrollTop;
                console.log('currentScrollValue is ' + currentScrollValue);
                console.log(contentActivate);

                if(currentScrollValue >= 130 && contentActivate2){
                    rndGoalHeader.css('width', '50%');
                    rndGoalContent.css('height', '600px');
                    rndGoalContent.css('opacity', '1');
                    setTimeout(function () {
                        rndSloganHeader.css('background-color', 'rgba(0,0,0,0.6)')
                    }, 1000)

                    contentActivate2 = false;
                }
                else if(currentScrollValue >= 880 && contentActivate[0]){
                    contentNote1.css("bottom", "-50px");
                    contentNote1.css("opacity", "1");
                    contentActivate[0] = false;
                }else if(currentScrollValue >= 1300 && contentActivate[1]){
                    contentNote2.css("bottom", "-50px");
                    contentNote2.css("opacity", "1");
                    contentActivate[1] = false;
                }else if(currentScrollValue >= 1750 && contentActivate[2]) {
                    contentNote3.css("bottom", "-50px");
                    contentNote3.css("opacity", "1");
                    contentActivate[2] = false;
                }else if(currentScrollValue >= 2250 && contentActivate[3]) {
                    contentNote4.css("bottom", "-50px");
                    contentNote4.css("opacity", "1");
                    contentActivate[3] = false;
                }
            });

        } else {
            document.addEventListener('scroll', function () {
                currentScrollValue = document.documentElement.scrollTop;
                console.log('currentScrollValue is ' + currentScrollValue);
                console.log(contentActivate)

                if(currentScrollValue >= 465 && contentActivate2){
                    rndGoalHeader.css('width', '300px');
                    rndGoalContent.css('height', '500px');
                    rndGoalContent.css('opacity', '1');
                    setTimeout(function () {
                        rndSloganHeader.css('background-color', 'rgba(0,0,0,0.6)')
                    }, 1000);
                    contentActivate2 = false;
                }
                else if(currentScrollValue >= 1450 && contentActivate[0]){
                    contentNote1.css("bottom", "-50px");
                    contentNote1.css("opacity", "1");
                    contentActivate[0] = false;
                }else if(currentScrollValue >= 2050 && contentActivate[1]){
                    contentNote2.css("bottom", "-50px");
                    contentNote2.css("opacity", "1");
                    contentActivate[1] = false;
                }else if(currentScrollValue >= 2650 && contentActivate[2]) {
                    contentNote3.css("bottom", "-50px");
                    contentNote3.css("opacity", "1");
                    contentActivate[2] = false;
                }else if(currentScrollValue >= 3250 && contentActivate[3]) {
                    contentNote4.css("bottom", "-50px");
                    contentNote4.css("opacity", "1");
                    contentActivate[3] = false;
                }
            });
        }
    }






});

