context('Login tests', () => {
    beforeEach(()=>{
        cy.visit('/')
        cy.url().should('include', 'http://testapp.galenframework.com/')
    })

    
    it('Login successfully', () => {
        cy.fixture("credentials").then((user)=>{
        cy.goToLogin()
        cy.login(user.email, user.password)
        cy.myNotesTextIsVisible('My Notes')
    })
    })
})