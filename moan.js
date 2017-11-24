$(window).ready(function () {
    var moan = new Audio("https://github.com/rogerhil/moan/raw/master/moan.mpeg");
    $(window).keydown(function (e) {
        switch (e.keyCode) {
            case 77:
                moan.play();
                window.setTimeout(function () {moan.pause();}, 500);
                break;
            case 79:
                moan.play();
                window.setTimeout(function () {moan.pause();}, 500);
                break;
            case 65:
                moan.play();
                window.setTimeout(function () {moan.pause();}, 500);
                break;
            case 78:
                moan.play();
                window.setTimeout(function () {moan.pause();}, 500);
                break;
        }
    });
});
