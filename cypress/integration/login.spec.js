it('successfully logs in', () => {
    cy.intercept('GET', '**/notes').as('getNotes')

    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.wait(10000)
    cy.contains('h1', 'Your Notes').should('be.visible')
})