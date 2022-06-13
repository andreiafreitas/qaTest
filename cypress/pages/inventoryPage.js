class inventoryPage {

    elements = {
        titleSpan: () => cy.get('.title'),
        titleItem: () => cy.get('.inventory_item_name'),
        itemPrice: () => cy.get('.inventory_item_price'),
    }

    itemNameAndPrice(name, price) {
        this.elements.titleItem(name);
        this.elements.itemPrice(price);
    }

}

module.exports = new inventoryPage();
