function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}

var delCookie = function (name) {
    var date = new Date();
    date.setDate(date.getDate() - 10);

    document.cookie = name + '=; expires=Thu, 01 Jan 2010 00:00:10 GMT;';
}

onbeforeunload = function () {

}









