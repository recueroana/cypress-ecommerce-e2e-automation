import loginPage from '../support/pages/loginPage'

describe('Teste de login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.fixture('users').then((users) => {
      loginPage.visit()
      loginPage.fillUsername(users.validUser.username)
      loginPage.fillPassword(users.validUser.password)
      loginPage.submit()

      cy.url().should('include', '/inventory')
    })
  })
})