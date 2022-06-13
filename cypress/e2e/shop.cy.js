import inventoryPage from '../pages/inventoryPage'

describe('shop', () => {

    it('should add items to the cart', () => {
        cy.typeLogin('standard_user');
        inventoryPage.elements.titleSpan().should('have.text', 'Products');
        inventoryPage.itemNameAndPrice('Sauce Labs Onesie', '$7.99');
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
        // view the cart, and verify that the correct item is listed with the correct price', () => {
        cy.get('.shopping_cart_container').click();
        cy.url().should('contain', '/cart.html');
        inventoryPage.itemNameAndPrice('Sauce Labs Onesie', '$7.99');
        cy.get('[data-test="continue-shopping"]').click();
        // 4. Add another item to the cart, and verify that the total price is correct for the two items.
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').click();
        inventoryPage.itemNameAndPrice('Sauce Labs Backpack', '$29.99');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Jane');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('WC1H');
        cy.get('[data-test="continue"]').click();
        cy.get('.summary_subtotal_label').should('contain', '$37.98');
    });
});

