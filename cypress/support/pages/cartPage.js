class CartPage {
  checkout() {
    cy.get('#checkout').click()
  }
}

export default new CartPage()