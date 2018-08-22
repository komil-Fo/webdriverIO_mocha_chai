
exports.config = {

    specs: [ './specs/tests/login.js' ],
    suites: {
        login: [
            './specs/tests/login.js'
        ]
    },
    baseUrl: 'https://github.com',
    capabilities: [ {
        maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
            args: [ 'window-size=1855,1056' ]
        }
    } ],

    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: false,
    bail: 0,
    waitforTimeout: 20000,
    waitforInterval: 3000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
    screenshotPath: './specs/errorShots/',
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest: function (test) {
        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        // get current test title and clean it, to use it as file name
        const filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
        // build file path
        const filePath = this.screenshotPath + filename + '.png';

        // save screenshot
        browser.saveScreenshot(filePath);
        console.log('\n\tScreenshot location:', filePath, '\n');
    },
    framework: 'mocha',
    mochaOpts: {
        timeout: 80000,
        ui: 'bdd',
        compilers: [ 'js:babel-register' ]
    },
    before: function () {
        let chai = require('chai');

        global.expect = chai.expect;
        chai.Should();
    }
};
