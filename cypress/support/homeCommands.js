const myNotesText = 'h2'

Cypress.Commands.add('myNotesTextIsVisible', (title)=>{
    cy.get(myNotesText).contains(title)
})