describe('Performance Tests', () => {
  const maxApiResponseTimeMs = 1200
  const maxPageLoadTimeMs = 4000

  it('Deve responder a página inicial em tempo aceitável', () => {
    cy.request({
      method: 'GET',
      // A rota /inventory pode retornar 404 publicamente.
      // Usamos uma página estável (login/index) para medir performance de forma consistente.
      url: 'https://www.saucedemo.com/index.html',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(
        response.duration,
        `Tempo de resposta acima de ${maxApiResponseTimeMs}ms`
      ).to.be.lessThan(maxApiResponseTimeMs)
    })
  })

  it('Deve carregar a página de login dentro do limite esperado', () => {
    cy.visit('/')

    cy.window().then((win) => {
      const navigationEntries = win.performance.getEntriesByType('navigation')
      const navigationTiming = navigationEntries[0]
      const loadTime = navigationTiming
        ? navigationTiming.loadEventEnd
        : 0

      expect(loadTime, `Tempo de carregamento acima de ${maxPageLoadTimeMs}ms`)
        .to.be.greaterThan(0)
        .and.lessThan(maxPageLoadTimeMs)
    })
  })
})
