import registerPage from "../../support/page-object/registerPage"

describe('Verify Register Functionality', () => {
    beforeEach(() => {
        cy.stepToRegister()
    })

    it.only('Register with Valid Data', () => {
        cy.fixture("users.json").then((users) => {
            const dataUser = users[2]
            registerPage.fillRegistrationForm(dataUser.firstName, dataUser.lastName, dataUser.email, dataUser.password)
        })
    })

    it('Register with Empty Form', () => {
        registerPage.submitForm()
        cy.contains('This is required field.').should('be.visible');
    })
})