import BasePage from './BasePage.js';

let b = browser;

export default class RegisterPage extends BasePage {

    constructor() {
        super();

        this.regForm = {
            body                  : `#signup-form`,
            loginField            : `#user_login`,
            emailField            : `#user_email`,
            passwordField         : `#user_password`,
            singUpBtn             : `#signup_button`
        };

        this.planForm = {
            body                  : `.setup-form`,
            continueBtn           : `.js-choose-plan-submit`
        };

        this.customizeForm = {
            body                         : `.user-identification-questions .setup-form-container`,
            firstCheckboxFirstQuestion   : `fieldset:nth-child(3) .form-checkbox:nth-child(1) > label`,
            firstCheckboxSecondQuestion  : `fieldset:nth-child(4) .form-checkbox:nth-child(1) > label`,
            firstCheckboxThirdQuestion   : `fieldset:nth-child(5) .form-checkbox:nth-child(1) > label`,
            interestInput                : `#question-input-101`,
            submitBtn                    : `.user-identification-questions .btn.btn-primary`
        };

        this.generatedLogin;
    }


    registrationUser() {
        let login = 'loginForTestGit' + this.getRandomNumber();
        let email = 'emailForTestGit' + this.getRandomNumber() + '@mail.com';
        this.generatedLogin = login;

        b.setValue(this.regForm.loginField, login);
        b.setValue(this.regForm.emailField, email);
        b.setValue(this.regForm.passwordField, 'FGHtyu123');
        b.click(this.regForm.singUpBtn);
        b.waitForVisible(this.planForm.body, 10000);

        return login;
    };
}
