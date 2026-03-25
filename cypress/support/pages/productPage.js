class ProductPage {
  addFirstProduct() {
    cy.get('.inventory_item button').first().click()
  }

  goToCart() {
    cy.get('.shopping_cart_link').click()
  }
}

export default new ProductPage()