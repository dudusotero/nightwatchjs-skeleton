var config = require('../nightwatch.conf.js');
var nightwatchHelper = require('../helpers/nightwatch.helper.js');

module.exports = {

    before: function (browser) {
        nightwatchHelper.setBrowser(browser);
        nightwatchHelper.windowMaximize();
        nightwatchHelper.url(browser.launch_url);
    },

    after: function (browser) {
        nightwatchHelper.end();
    },

    '[Test] - 001 - Only to see if this works': function (browser) {
        nightwatchHelper.expectElementTextToEqual('#index-container .jumbotron span', 'Nightwatch.js');
    }

};