import loginPage from '../support/pages/loginPage'

describe('Testes de Segurança', () => {
  it('Nao deve permitir acesso a inventário sem login', () => {
    cy.visit('/inventory.html', { failOnStatusCode: false })

    cy.get('body').then(($body) => {
      const hasLoginForm = $body.find('#user-name').length > 0
      const text = $body.text().toLowerCase()
      const looksLikeNotFound =
        text.includes('404') || text.includes('not found')

      // Objetivo: bloquear acesso não autenticado.
      // Dependendo da rede/ambiente, pode haver redirecionamento para login
      // ou uma página "not found".
      expect(hasLoginForm || looksLikeNotFound).to.eq(true)
    })
  })

  it('Não deve autenticar com credenciais inválidas', () => {
    loginPage.visit()
    loginPage.fillUsername('invalid_user')
    loginPage.fillPassword('invalid_password')
    loginPage.submit()

    // Se a autenticação falhar, o user não deve cair em /inventory.
    cy.url().should('not.include', '/inventory')
    cy.get('#user-name').should('be.visible')
  })

  it('Não deve executar payload de XSS no formulário de login', () => {
    cy.on('window:alert', (text) => {
      throw new Error(`XSS alert disparado: ${text}`)
    })

    loginPage.visit()
    loginPage.fillUsername("<script>alert('xss')</script>")
    loginPage.fillPassword("</script><img src=x onerror=alert('xss')>")
    loginPage.submit()

    // Mesmo com payload, o app deve continuar navegando sem alert.
    cy.get('#user-name').should('be.visible')
  })
})

