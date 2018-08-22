import { assert, should, expect }  from 'chai';

class BasePage {

    constructor() {};

    setUp() {
        browser.ignoreSynchronization = true;
        browser.timeouts('implicit', 20000);
        browser.timeouts('script', 20000);
        browser.timeouts('page load', 20000);
    }

    assertUrl(path, msg) {
        let config = require('../../wdio.conf').config;

        let expectedUrl = config.baseUrl + '/' + path;
        let currentUrl = browser.getUrl();

        assert.equal(currentUrl, expectedUrl, msg);
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (100000000 - 1) + 1);
    };
}

export default BasePage;
