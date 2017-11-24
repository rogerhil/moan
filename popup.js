document.addEventListener('DOMContentLoaded', function () {
    console.log("@@@@@@@@@@@@@");
    var checkPageButton = document.getElementById('start');
    console.log("###");
    checkPageButton.addEventListener('click', function () {
        console.log("START!!!!!");
        chrome.tabs.getSelected(null, function (tab) {
            $(window).keydown(function (e) {
                switch (e.keyCode) {
                    case "m":
                        alert("m");
                        console.log("m")
                        break;
                    case "o":
                        alert("o");
                        console.log("o")
                        break;
                    case "a":
                        alert("a");
                        console.log("a")
                        break;
                    case "n":
                        alert("n");
                        console.log("n")
                        break;
                }
            });
        });
    }, false);
}, false);
