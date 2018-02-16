var config = require('../nightwatch.conf.js');
var nightwatchHelper = require('../helpers/nightwatch.helper.js');

module.exports = {

    before: function (browser) {
        nightwatchHelper.setBrowser(browser);
        nightwatchHelper.url(browser.launch_url);
        nightwatchHelper.windowMaximize();
    },

    after: function (browser) {
        nightwatchHelper.end();
    },

    '[CT Teste] - 001 - Apenas um teste': function (browser) {
        nightwatchHelper.end();
    }

};