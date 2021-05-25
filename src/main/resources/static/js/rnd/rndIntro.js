$(document).ready(function () {
    let currentScrollValue = document.documentElement.scrollTop;
    let contentActivate = [true, true, true, true];
    let contentNote1 = $('.contentNote1');
    let contentNote2 = $('.contentNote2');
    let contentNote3 = $('.contentNote3');
    let contentNote4 = $('.contentNote4');
    console.log('currentScrollValue is ' + currentScrollValue);

    document.addEventListener('scroll', function () {
        currentScrollValue = document.documentElement.scrollTop;
        console.log('currentScrollValue is ' + currentScrollValue);
        console.log(contentActivate)

        if(currentScrollValue >= 300 && contentActivate[0]){
            contentNote1.css("bottom", "-50px");
            contentNote1.css("opacity", "1");
            contentActivate[0] = false;
        }else if(currentScrollValue >= 920 && contentActivate[1]){
            contentNote2.css("bottom", "-50px");
            contentNote2.css("opacity", "1");
            contentActivate[1] = false;
        }else if(currentScrollValue >= 1545 && contentActivate[2]) {
            contentNote3.css("bottom", "-50px");
            contentNote3.css("opacity", "1");
            contentActivate[2] = false;
        }else if(currentScrollValue >= 2160 && contentActivate[3]) {
            contentNote4.css("bottom", "-50px");
            contentNote4.css("opacity", "1");
            contentActivate[3] = false;
        }


    });


});

