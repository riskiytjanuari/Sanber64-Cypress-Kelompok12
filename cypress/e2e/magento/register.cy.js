import registerPage from "../../support/page-object/registerPage.js"

describe('Verify Register Functionality', () => {
    beforeEach(() => {
        cy.stepToRegister()
    })

    it('Register with Valid Data', () => {
        cy.fixture("users.json").then((users) => {
            const dataUser = users[3]
            registerPage.fillRegistrationForm(dataUser.firstName, dataUser.lastName, dataUser.email, dataUser.password)
        })
        registerPage.submitForm()
        cy.get('.base').should('have.text' , 'My Account')
    })

    it('Register with Empty Form', () => {
        registerPage.submitForm()
        cy.contains('This is required field.').should('be.visible')
    })

    it.only('Register with Existing Email', () => {
        cy.fixture("users.json").then((users) => {
            const dataUser = users[4]
            registerPage.fillRegistrationForm(dataUser.firstName, dataUser.lastName, dataUser.email, dataUser.password)
        })
        registerPage.submitForm()
        cy.contains('There is already an account with this email address').should('be.visible')
    })
})