const SCREENSHOT_PATH = "./tests/reports/screenshots/";
const BINPATH = './node_modules/nightwatch/bin/';

module.exports = {
    "src_folders": [
        "./tests/specs/test.spec.js"
    ],
    "output_folder": "./tests/reports/",
    "selenium": {
        "start_process": true,
        "server_path": BINPATH + "selenium.jar",
        "log_path": "./tests/reports/",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": BINPATH + "chromedriver"
        }
    },
    "test_workers": {
        "enabled": false,
        "workers": "auto"
    },
    "test_settings": {
        "default": {
            "launch_url": "http://nightwatchjs.org/",
            "screenshots": {
                "enabled": false,
                "path": SCREENSHOT_PATH
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "extensions": [
                        encode('./tests/extensions/XPath_Helper.crx')
                    ]
                }
            }
        }
    }
}

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) {
    if (err || !stat || stat.size < 1) {
        require('selenium-download').ensure(BINPATH, function (error) {
            if (error) throw new Error(error);
            console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
        });
    }
});

function padLeft(count) {
    return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0;

function imgpath(browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name);
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

function encode(file) {
    var stream = require('fs').readFileSync(file);
    return new Buffer(stream).toString('base64');
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;