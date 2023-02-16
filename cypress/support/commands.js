Cypress.Commands.add('fillSignupFormAndSubmit', (email, password) => {
    cy.visit('/signup')
    cy.get('#email').type(email)
    cy.get('#password').type(password, { log: false })
    cy.get('#confirmPassword').type(password, { log: false })
    cy.contains('button', 'Signup').click()
    cy.get('#confirmationCode').should('be.visible')
})

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login')
    cy.get('#email').type(email)
    cy.get('#password').type(password, { log: false })
    cy.contains('button', 'Login').click()
})