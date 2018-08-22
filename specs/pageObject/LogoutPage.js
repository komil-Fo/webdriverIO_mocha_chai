import BasePage            from './BasePage.js';
import HomePage            from './HomePage.js';
import project             from '../project.json';

let home;
home           = new HomePage();

let b = browser;

export default class LogoutPage extends BasePage {

    constructor() {
        super();

        this.form = {
            body             : `#js-pjax-container > div > form`,
            logoutBtn        : `.btn-block.f4.py-3.mt-5`
        }
    }

    userLogout() {
        b.url(project.pages.logout);
        b.waitForVisible(this.form.body, 1000);
        b.click(this.form.logoutBtn);
        b.waitForVisible(home.container.homePage, 15000);
    }
}
