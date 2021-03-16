document.addEventListener('scroll', function () {
    let currentScrollValue = document.documentElement.scrollTop;

    if (currentScrollValue < 0)
        event.returnValue = false;

});