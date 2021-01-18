document.addEventListener('scroll', function () {
    var currentScrollValue = document.documentElement.scrollTop;

    if (currentScrollValue < 0)
        event.returnValue = false;

});