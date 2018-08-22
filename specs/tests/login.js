import HomePage            from '../pageObject/HomePage';
import LoginPage           from '../pageObject/LoginPage';
import RegistrationPage    from '../pageObject/RegistrationPage';
import LogoutPage          from '../pageObject/LogoutPage';
import { config }          from '../../wdio.conf';
import project             from '../project.json';
import { assert, should, expect }  from 'chai';

let login, home, registration, logout;

let b = browser;

describe('Checking the login:', () => {

    before(() => {
        login             = new LoginPage();
        home              = new HomePage();
        registration      = new RegistrationPage();
        logout            = new LogoutPage();

        login.setUp();
    }, 2);

    beforeEach(() => {
        b.url(project.pages.login);
        b.waitForVisible(login.authForm.body, 10000);
    }, 2);

    describe('errors,', () => {

        it('with all empty fields', () => {
            login.loginUser('', '');
            b.waitForVisible(login.authForm.errorMsg, 10000);

            expect(b.getText(login.authForm.errorMsg)).to.equal(project.error.incorrectLogin,
                'should be present the error for incorrect login');
        });

        it('with empty email', () => {
            login.loginUser('', project.user1.password);
            b.waitForVisible(login.authForm.errorMsg, 10000);

            expect(b.getText(login.authForm.errorMsg)).to.equal(project.error.incorrectLogin,
                'should be present the error for incorrect login');

        });

        it('with empty password', () => {
            login.loginUser(project.user1.login, '');
            b.waitForVisible(login.authForm.errorMsg, 10000);

            expect(b.getText(login.authForm.errorMsg)).to.equal(project.error.incorrectLogin,
                'should be present the error for incorrect login');
        });

        it('with email without at', () => {
            login.loginUser('emailmail.com', project.user1.password);
            b.waitForVisible(login.authForm.errorMsg, 10000);

            expect(b.getText(login.authForm.errorMsg)).to.equal(project.error.incorrectLogin,
                'should be present the error for incorrect login');
        });

        it('with email without dot in domain', () => {
            login.loginUser('email@mailcom', project.user1.password);
            b.waitForVisible(login.authForm.errorMsg, 10000);

            expect(b.getText(login.authForm.errorMsg)).to.equal(project.error.incorrectLogin,
                'should be present the error for incorrect login');
        });

        it('with wrong password', () => {
            login.loginUser(project.user1.email, '123qwerty');
            b.waitForVisible(login.authForm.errorMsg, 10000);

            expect(b.getText(login.authForm.errorMsg)).to.equal(project.error.incorrectLogin,
                'should be present the error for incorrect login');
        });
    });

    describe('link navigation,', () => {

        it('reset password', () => {
            b.click(login.authForm.passwResetLink);
            b.waitForVisible(login.passwReset.body, 10000);

            login.assertUrl(project.pages.passwReset,
                'the current URL should be the password reset');
        });

        it('create account', () => {
            b.click(login.authForm.registrationLink);
            b.waitForVisible(registration.regForm.body, 10000);
            let regUrlWithSource = project.pages.registration + '?source=' + project.pages.login;

            login.assertUrl(regUrlWithSource,
                'the current URL should be the join');
        });

        it('home', () => {
            b.click(login.authForm.homeIcon);
            b.waitForVisible(home.container.homePage, 10000);

            expect(b.getUrl()).to.equal(config.baseUrl + '/',
                'the current URL should be the home page');
        });
    });

    describe('successful login,', () => {

        afterEach(() => {
            logout.userLogout();
        });

        it('with email', () => {
            login.loginUser(project.user1.email, project.user1.password);
            b.waitForVisible(home.container.homePage, 10000);
            b.click(home.header.avatar);
            b.waitForVisible(home.menuItems.userLink, 10000);

            expect(b.getText(home.menuItems.userLink)).to.equal(project.description.loginAs + project.user1.login,
                'should be visible the user name');
            expect(b.getUrl()).to.equal(config.baseUrl + '/',
                'the current URL should be the home page');
        });

        it('with user login', () => {
            login.loginUser(project.user1.login, project.user1.password);
            b.waitForVisible(home.container.homePage, 10000);
            b.click(home.header.avatar);
            b.waitForVisible(home.menuItems.userLink, 10000);

            expect(b.getText(home.menuItems.userLink)).to.equal(project.description.loginAs + project.user1.login,
                'should be visible the user name');
            expect(b.getUrl()).to.equal(config.baseUrl + '/',
                'the current URL should be the home page');
        });
    });
}, 2);
