let sideBarStatus = true;
let subMenuStatus = [true, true, true, true];

$(document).ready(function () {

    $('#menu').on('click', function (e) {
        sidebar();
    });

    $('.menuContent').on('click', function (e) {
        subMenu($(this));
    });
});

function sidebar() {
    const sideBar = $('.sidebar');
    const menu =  $('#menu');
    const languageSelectContainer = $('.languageSelectContainer');
    const sideBarContentContainer = $('.sideBarContentContainer');
    const sideBarLogo = $('.sideBarLogo');

    if(sideBarStatus){
        sideBar.css("width", "100vw");
        sideBar.css("background-color", "white");
        languageSelectContainer.css("opacity", "1");
        sideBarContentContainer.css("opacity", "1");
        sideBarLogo.css("opacity", "1");
        sideBarLogo.css("display", "block");
        menu.removeClass();
        menu.addClass("fas fa-times");
        sideBarStatus = false;
    }else{
        sideBar.css("width", "50px");
        sideBar.css("background-color", "rgba(0,0,0,0)");
        languageSelectContainer.css("opacity", "0");
        sideBarContentContainer.css("opacity", "0");
        sideBarLogo.css("opacity", "0");
        sideBarLogo.css("display", "none");
        menu.removeClass();
        menu.addClass("fas fa-bars");
        sideBarStatus = true;
    }
}

function subMenu(nowContent) {
    let subMenuBox = nowContent.children('div.subMenuBox');
    let suMenuBoxIcon = nowContent.children('i');

    let nowContentName = nowContent.attr('name');

    if(nowContentName == "company"){
        if(subMenuStatus[0]){
            subMenuBox.css("height", "180px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[0] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[0] = true;
        }
    }else if(nowContentName == "product"){
        if(subMenuStatus[1]){
            subMenuBox.css("height", "180px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[1] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[1] = true;
        }

    }else if(nowContentName == "rnd"){
        if(subMenuStatus[2]){
            subMenuBox.css("height", "180px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[2] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[2] = true;
        }

    }else if(nowContentName == "customer"){
        if(subMenuStatus[3]){
            subMenuBox.css("height", "180px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[3] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[3] = true;
        }
    }

}
