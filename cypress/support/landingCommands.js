const welcomeElement = '#welcome-page'
const loginButton = '.btn-lg'

Cypress.Commands.add('goToLogin', ()=>{
    cy.get(welcomeElement).should('be.visible')
    cy.get(loginButton).click()
    })