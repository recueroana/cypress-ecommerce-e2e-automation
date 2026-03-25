class CheckoutPage {

  fillInformation(user) {
    cy.get('#first-name').type(user.firstName)
    cy.get('#last-name').type(user.lastName)
    cy.get('#postal-code').type(user.zipCode)
  }

  continue() {
    cy.get('#continue').click()
  }

  finish() {
    cy.get('#finish').click()
  }

  validateSuccess() {
    cy.contains('Thank you for your order').should('be.visible')
  }

}

export default new CheckoutPage()