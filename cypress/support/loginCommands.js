// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

const fieldUserName = '[name="login.username"]'
const fieldPasword = '[name="login.password"]'
const buttonLogin = '.button-login'
const loginComponent = '#login-page'


Cypress.Commands.add('login', (email, password)=>{
        cy.get(loginComponent).should('be.visible')
        cy.get(loginComponent).within(()=>{
            cy.get(fieldUserName).type(email)
            cy.get(fieldPasword).type(password)
            cy.get(buttonLogin).click()
        })
})