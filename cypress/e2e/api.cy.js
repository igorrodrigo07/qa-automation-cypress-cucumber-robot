describe('API - Busca de usuário', () => {
  it('deve retornar os dados do usuário 1 com status 200', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('email')
      })
  })
})