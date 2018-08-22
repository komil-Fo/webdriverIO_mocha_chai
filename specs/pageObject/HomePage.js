import BasePage from './BasePage.js';

export default class HomePage extends BasePage {

    constructor() {
        super();

        this.container = {
            homePage             : `.application-main`,
            accountSwitcher      : `.account-switcher-truncate-override`
        };

        this.header = {
            avatar                  : `#user-links > li:nth-child(3) > details > summary > img`
        };

        this.menuItems = {
            userLink                 : `.user-profile-link`
        }
    }
}
