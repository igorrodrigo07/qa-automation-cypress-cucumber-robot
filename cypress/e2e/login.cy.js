describe('UI - Navegação no Cypress Example', () => {
  it('deve acessar a página Querying com sucesso', () => {
    cy.visit('https://example.cypress.io')

    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Querying').click()

    cy.location('pathname').should('eq', '/commands/querying')
    cy.contains('h1', 'Querying').should('be.visible')
  })
})