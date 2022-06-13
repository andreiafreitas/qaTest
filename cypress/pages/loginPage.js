class loginPage {

    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    submitLoginForm(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}

module.exports = new loginPage();

