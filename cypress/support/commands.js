Cypress.Commands.add('login', (user) => {
  cy.get('#user-name').type(user.username)
  cy.get('#password').type(user.password)
  cy.get('#login-button').click()
})