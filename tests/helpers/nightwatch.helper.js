var nightwatchHelper = {

    setBrowser: function (b) {
        browser = b;
    },

    url: function (url) {
        browser.url(url);
    },

    waitForElementVisibleClick: function (selector, useXpath = false) {
        if (useXpath) { browser.useXpath() }
        browser.waitForElementVisible(selector, 1000, function () {
            browser.click(selector);
            if (useXpath) { browser.useCss() }
        });
    },

    waitForElementVisibleSetValue: function (selector, value, useXpath = false) {
        if (useXpath) { browser.useXpath() }
        browser.waitForElementVisible(selector, 1000, function () {
            browser.clearValue(selector)
                .setValue(selector, value);
        });
        if (useXpath) { browser.useCss() }
    },

    windowMaximize: function () {
        browser.windowMaximize();
    },

    pause: function (ms, callback) {
        browser.pause(ms, callback);
    },

    end: function () {
        browser.end();
    }

};

module.exports = nightwatchHelper;