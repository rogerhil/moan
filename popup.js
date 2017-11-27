$(window).ready(function () {
    var options = MoaningKeysOptions();
    options.setup();
});

var MoaningKeysOptions = function () {
    var self = this;

    self.setup = function() {
        $("#enable-field input[name=enabled]").change(function () {
            var enable = $(this).val() == "true";
            self.enableDisable(enable);
            // chrome.tabs.getSelected(null, function (tab) {
            // });
        });
        $("#duration").change(function () {
            self.setDuration($(this).val());
        });

        chrome.storage.sync.get({enabled: true, duration: 1000}, function (items) {
            $("#enable-field input[name=enabled][value=" + items.enabled + "]").prop("checked", true);
            console.log(items.duration);
            $("#duration").val(items.duration);
            $("#enable-field input[name=enabled]").trigger("change");
        });
    };

    self.enableDisable = function (enabled) {
        self.set("enabled", enabled);
    };

    self.setDuration = function (duration) {
        self.set("duration", duration);
    };

    self.set = function (key, value) {
        chrome.storage.sync.get({enabled: true}, function (items) {
            items[key] = value;
            chrome.storage.sync.set(items);
            chrome.runtime.sendMessage({type: "options", items: items});
        });
    };
    return self;
};
