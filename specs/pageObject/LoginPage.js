import BasePage from './BasePage.js';

let b = browser;

export default class LoginPage extends BasePage {

    constructor() {
        super();

        this.authForm = {
            body               : `.auth-form-body`,
            homeIcon           : `.octicon.octicon-mark-github`,
            loginField         : `#login_field`,
            passwordField      : `#password`,
            passwResetLink     : `.label-link`,
            submitBtn          : `.btn-primary.btn-block`,
            errorMsg           : `.flash-error .container`,
            registrationLink   : `#login > p > a`
        };

        this.passwReset = {
            body               : `#forgot_password_form`,
            emailField         : `#email_field`
        };
    }

    loginUser(login, password) {
        b.setValue(this.authForm.loginField, login);
        b.setValue(this.authForm.passwordField, password);
        b.click(this.authForm.submitBtn);
    }
}
