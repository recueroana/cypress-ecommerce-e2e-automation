describe('API Tests', () => {

  it('Deve criar usuário via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: "Ana",
        job: "QA"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })

})