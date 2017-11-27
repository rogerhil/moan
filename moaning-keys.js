$(window).ready(function () {
    var moan = MoaningKeys();
    moan.load();
});


var MoaningKeys = function () {
    var self = this;
    self.audio = undefined;
    self.playing = false;

    self.moan = function (keyCode, duration) {
        if (self.playing) return;
        switch (keyCode) {
            case 77:
            case 79:
            case 65:
            case 78:
                self.audio.play();
                self.playing = true;
                window.setTimeout(function () {self.audio.pause(); self.playing = false;}, duration);
        }
    };

    self.load = function() {
        self.audio = new Audio("https://github.com/rogerhil/moan/raw/master/moan.mpeg");
        $(window).keydown(function (e) {
            chrome.storage.sync.get({enabled: true, duration: 1000}, function (items) {
                if (!items.enabled) {
                    return;
                }
                self.moan(e.keyCode, items.duration);
            });
        });
    };

    return self;
};
