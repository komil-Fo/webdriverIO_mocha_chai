import HomePage            from '../pageObject/HomePage';
import RegistrationPage    from '../pageObject/RegistrationPage';
import project             from '../project.json';
import { assert, should, expect }  from 'chai';

let home, registration;

let b = browser;

describe('Registration:', () => {

    before(() => {
        home              = new HomePage();
        registration      = new RegistrationPage();

        registration.setUp();
    }, 2);

    beforeEach(() => {
        b.url(project.pages.registration);
        b.waitForVisible(registration.regForm.body, 10000);
    }, 2);

    it('successful registration', () => {
        registration.registrationUser();

        registration.assertUrl(project.pages.plan,
            'the current URL should be the plan page');
        b.click(registration.planForm.continueBtn);
        b.waitForVisible(registration.customizeForm.body, 10000);

        registration.assertUrl(project.pages.customize,
            'the current URL should be the customize page');

        b.click(registration.customizeForm.firstCheckboxFirstQuestion);
        b.click(registration.customizeForm.firstCheckboxSecondQuestion);
        b.click(registration.customizeForm.firstCheckboxThirdQuestion);
        b.setValue(registration.customizeForm.interestInput, 'I\'m interested in...');
        b.click(registration.customizeForm.submitBtn);

        b.waitForVisible(home.container.homePage, 10000);
        b.click(home.header.avatar);
        b.waitForVisible(home.menuItems.userLink, 10000);

        expect(b.getText(home.menuItems.userLink)).to.equal(project.description.loginAs + registration.generatedLogin,
            'should be visible the user name');
        registration.assertUrl(project.pages.dashboard,
            'the current URL should be the dashboard page');
    });
});
