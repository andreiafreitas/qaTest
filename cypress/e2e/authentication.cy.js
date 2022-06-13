import loginPage from '../pages/loginPage'

describe('authentication', () => {

    it('should login and logout as a standard user', () => {
        cy.visit('/');
        loginPage.submitLoginForm('standard_user', 'secret_sauce');
        cy.url().should('contain', '/inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').should('be.visible').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('should display error when logging in as locked_out_user', () => {
        cy.visit('/');
        loginPage.submitLoginForm('locked_out_user', 'secret_sauce');
        loginPage.elements.errorMessage().should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
});